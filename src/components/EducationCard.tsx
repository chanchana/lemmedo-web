import { Box, BulletList, Card, Grid, Typography } from "../common"
import { Style } from "../styles/style"
import { Logo } from "./Logo"
import Agodee from "../assets/logos/agodee.jpeg"
import { Icon } from "../styles/icons"
import React from "react"
import { Collapse } from 'react-collapse'
import KMUTT from '../assets/logos/kmutt.png'
import { ResponsiveContext } from "../contexts/responsive"

interface Props {
    // educationData: EducationData;
}

export const EducationCard = (props: Props) => {
    const { isMobile } = React.useContext(ResponsiveContext)
    return (
        <Card heightFitContent>
            <Grid templateColumn="auto 1fr auto" gap={Style.Spacing.L}>
                <Logo image={KMUTT} mobile={isMobile} />
                <Box center justifyContent="start">
                    <Box>
                        <Typography block variant="body3">2017 - 2021</Typography>
                        <Typography block variant="heading4">Computer Engineering (International Program)</Typography>
                        <Typography block variant="heading4">King Mongkut's University of Technology Thonburi</Typography>
                        <Typography block variant="body2">GPAX: 500 out of 4.00</Typography>
                    </Box>
                </Box>
            </Grid>
        </Card>
    )
}