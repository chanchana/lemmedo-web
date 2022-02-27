import React from "react"
import { Box, Card, Grid, OverflowBox, Typography } from "../common"
import { ReviewCard } from "../components/ReviewCard"
import { SectionHeading } from "../components/SectionHeader"
import { ServiceCard } from "../components/ServiceCard"
import { Content } from "../constants/content"
import { Style } from "../styles/style"

export const Reviews = () => {
    return (
        <React.Fragment>
            <SectionHeading title={Content.Reviews.Title} subtitle={Content.Reviews.Subtitle} />
            <OverflowBox extended>
                <Box paddingBottom={Style.Spacing.L}>
                    <Grid inline gap={Style.Spacing.L}>
                        {Content.Reviews.Data.map(review => <ReviewCard data={review} />)}
                    </Grid>
                </Box>
            </OverflowBox>
        </React.Fragment>
    )
}