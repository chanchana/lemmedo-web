import React from "react"
import { Box, Card, Grid, Typography } from "../common"
import { SectionHeading } from "../components/SectionHeader"
import { ServiceCard } from "../components/ServiceCard"
import { Content } from "../constants/content"
import { Style } from "../styles/style"

export const Services = () => {
    return (
        <React.Fragment>
            <SectionHeading title={Content.Services.Title} subtitle={Content.Services.Subtitle} />
            <Grid columns={3} gap={Style.Spacing.L}>
                {Content.Services.Data.map(({ title, caption, icon }) =>
                    <ServiceCard title={title} caption={caption} icon={icon} />
                )}
            </Grid>
        </React.Fragment>
    )
}