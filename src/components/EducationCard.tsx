import { Box, BulletList, Card, Grid, Typography } from "../common"
import { Style } from "../styles/style"
import { Logo } from "./Logo"
import Agodee from "../assets/logos/agodee.jpeg"
import { Icon } from "../styles/icons"
import React from "react"
import { Collapse } from 'react-collapse'
import KMUTT from '../assets/logos/kmutt.png'
import { ResponsiveContext } from "../contexts/responsive"
import { EducationData } from "../data/educations"

interface Props {
    educationData: EducationData;
}

export const EducationCard = (props: Props) => {
    const { isMobile } = React.useContext(ResponsiveContext)
    return (
        <Card heightFitContent>
            <Grid templateColumn="auto 1fr auto" gap={Style.Spacing.L}>
                <Logo image={props.educationData.logoSrc} mobile={isMobile} />
                <Box center justifyContent="start">
                    <Box>
                        <Typography block variant="body3">{props.educationData.duration}</Typography>
                        <Typography block variant="heading4">{props.educationData.program}</Typography>
                        <Typography block variant="heading4">{props.educationData.institute}</Typography>
                        <Typography block variant="body2">{props.educationData.caption}</Typography>
                    </Box>
                </Box>
            </Grid>
        </Card>
    )
}