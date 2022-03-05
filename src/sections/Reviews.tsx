import React from "react"
import { Box, Grid, OverflowBox } from "../common"
import { ReviewCard } from "../components/ReviewCard"
import { SectionHeading } from "../components/SectionHeader"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const Reviews = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Reviews.Path)

    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.Reviews.Title} subtitle={Content.Reviews.Subtitle} />
            <OverflowBox extended>
                <Box paddingBottom={Style.Spacing.L}>
                    <Grid inline gap={Style.Spacing.L}>
                        {Content.Reviews.Data.map((review, index) => <ReviewCard key={`review-${index}`} data={review} />)}
                    </Grid>
                </Box>
            </OverflowBox>
        </div>
    )
}