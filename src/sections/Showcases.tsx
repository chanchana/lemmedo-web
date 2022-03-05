import { Grid } from "../common"
import { CategorySelect } from "../components/CategorySelect"
import { SectionHeading } from "../components/SectionHeader"
import { Content } from "../constants/content"
import { Style } from "../styles/style"
import { ShowcaseCard } from "../components/ShowcaseCard"
import { Category } from "../data/categories"
import React from "react"
import { Collapsible } from "../components/Collapsible"
import { getShowcasesByCategory } from "../data/showcases"
import { Parameter } from "../constants/parameter"
import { useNavigation } from "../hooks/useNavigation"
import { ResponsiveContext } from "../contexts/responsive"


export const Showcases = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Showcases.Path)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    const [selectedCategory, setSelectedCategory] = React.useState<Category>(Category.All);
    const showcases = React.useMemo(() => getShowcasesByCategory(selectedCategory), [selectedCategory]);
    const visibleShowcases = React.useMemo(() => showcases.slice(0, Parameter.ShowcasesInitialVisibleCount), [showcases]);
    const hiddenShowcases = React.useMemo(() => showcases.slice(Parameter.ShowcasesInitialVisibleCount), [showcases]);

    const handleChangeCategory = (category: Category) => {
        setSelectedCategory(category)
    }

    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.Showcases.Title} subtitle={Content.Showcases.Subtitle}>
                <CategorySelect onChange={handleChangeCategory} />
            </SectionHeading>
            <Grid columns={isMobile ? 1 : 2} gap={Style.Spacing.L}>
                {visibleShowcases.map((showcase, index) => <ShowcaseCard key={`showcase-${index}`} showcaseData={showcase} />)}
            </Grid>
            {hiddenShowcases.length > 0 && <Collapsible>
                <Grid columns={isMobile ? 1 : 2} gap={Style.Spacing.L} marginTop={Style.Spacing.L}>
                    {hiddenShowcases.map((showcase, index) => <ShowcaseCard key={`showcase-${index}`} showcaseData={showcase} />)}
                </Grid>
            </Collapsible>}
        </div>
    )
}