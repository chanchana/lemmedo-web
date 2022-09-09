import React from "react"
import { Box, Card, Stack } from "../common"
import { EducationCard } from "../components/EducationCard"
import { ImagesCarousel } from "../components/ImagesCarousel"
import { Section } from "../components/Section"
import { SectionHeading } from "../components/SectionHeader"
import { Timeline } from "../components/Timeline"
import { WorkExperienceCard } from "../components/WorkExperienceCard"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { ResponsiveContext } from "../contexts/responsive"
import { activityImages } from "../data/activities"
import { educations } from "../data/educations"
import { workExperiences } from "../data/workExperiences"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const About = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.About.Path)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.About.Title} subtitle={Content.About.Subtitle} />
            {/* <Stack vertical gap={Style.Spacing.XXL}>
                <Section title={Content.About.WorkExperienceHeading}>
                    <Timeline visibleCount={3} lined={!isMobile}>
                        {workExperiences.map((data, index) => <WorkExperienceCard key={`work-${index}`} workExperienceData={data} />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.EducationHeading}>
                    <Timeline visibleCount={3} lined={!isMobile}>
                        {educations.map((data, index) => <EducationCard key={`education-${index}`} educationData={data} />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.ActivitiesHeading}>
                    <Card noPadding>
                        <Box padding={Style.Spacing.S}>
                            <ImagesCarousel images={activityImages} />
                        </Box>
                    </Card>
                </Section>
            </Stack> */}
        </div>
    )
}