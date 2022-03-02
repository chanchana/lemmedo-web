import React from "react"
import { Box, Card, Grid, Typography } from "../common"
import { SectionHeading } from "../components/SectionHeader"
import { ServiceCard } from "../components/ServiceCard"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { ResponsiveContext } from "../contexts/responsive"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const Services = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Services.Path)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.Services.Title} subtitle={Content.Services.Subtitle} />
            <Grid columns={isMobile ? 2 : 3} gap={Style.Spacing.L}>
                {Content.Services.Data.map(({ title, caption, icon }) =>
                    <ServiceCard title={title} caption={caption} icon={icon} />
                )}
            </Grid>
        </div>
    )
}