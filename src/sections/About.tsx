import React from "react"
import { Box, Card, Grid, OverflowBox, Typography } from "../common"
import { EducationCard } from "../components/EducationCard"
import { Section } from "../components/Section"
import { SectionHeading } from "../components/SectionHeader"
import { Timeline } from "../components/Timeline"
import { WorkExperienceCard } from "../components/WorkExperienceCard"
import { Content } from "../constants/content"
import { Style } from "../styles/style"

export const About = () => {
    return (
        <React.Fragment>
            <SectionHeading title={Content.About.Title} subtitle={Content.About.Subtitle} />
            <Grid flowRow gap={Style.Spacing.XXL}>
                <Section title={Content.About.WorkExperienceHeading}>
                    <Timeline visibleCount={3}>
                        {[1, 1, 1, 1, 1, 1, 1].map(() => <WorkExperienceCard />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.EducationHeading}>
                    <Timeline visibleCount={3}>
                        {[1].map(() => <EducationCard />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.ActivitiesHeading}>
                    <Card noPadding>
                        <OverflowBox>
                            <Box padding={Style.Spacing.S}>
                                <Grid gap={Style.Spacing.S}>
                                    {[1, 1, 1, 1,1 ,1 ,1 , 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => <Box width="136px" height="136px" borderRadius="6px" background="white" />)}
                                </Grid>
                            </Box>
                        </OverflowBox>
                    </Card>
                </Section>
            </Grid>
        </React.Fragment>
    )
}