import { Box, Button, Card, Grid, Typography } from "../common"
import { CategorySelect } from "../components/CategorySelect"
import { SectionHeading } from "../components/SectionHeader"
import { Content } from "../constants/content"
import { Style } from "../styles/style"
import SampleImage from "../assets/showcases/sample.jpg";
import { ShowcaseCard } from "../components/ShowcaseCard"
import { Category } from "../data/categories"
import { Icon } from "../styles/icons"
import React from "react"
import { Collapsible } from "../components/Collapsible"
import { getShowcasesByCategory, ShowcaseData } from "../data/showcases"
import { Parameter } from "../constants/parameter"
import { useNavigation } from "../hooks/useNavigation"

const fakeTitle = "Pordeetorjai Personal Website";
const fakeCaption = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.';

export const Showcases = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Showcases.Path)
    
    const [selectedCategory, setSelectedCategory] = React.useState<Category>(Category.All);
    const showcases = React.useMemo(() => getShowcasesByCategory(selectedCategory), [selectedCategory]);
    const visibleShowcases = React.useMemo(() => showcases.slice(0, Parameter.ShowcasesInitialVisibleCount), [showcases]);
    const hiddenShowcases = React.useMemo(() => showcases.slice(Parameter.ShowcasesInitialVisibleCount), [showcases]);
    
    const renderShowcaseCard = (showcase: ShowcaseData) => (
        <ShowcaseCard showcaseData={showcase} />
    );

    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.Showcases.Title} subtitle={Content.Showcases.Subtitle}>
                <CategorySelect />
            </SectionHeading>
            <Grid columns={2} gap={Style.Spacing.L}>
                {visibleShowcases.map(showcase => renderShowcaseCard(showcase))}
            </Grid>
            {hiddenShowcases.length > 0 && <Collapsible>
                <Grid columns={2} gap={Style.Spacing.L} marginTop={Style.Spacing.L}>
                    {hiddenShowcases.map(showcase => renderShowcaseCard(showcase))}
                </Grid>
            </Collapsible>}
        </div>
    )
}