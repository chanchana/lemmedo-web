import { Box, BulletList, Card, Grid, Typography } from "../common"
import { Style } from "../styles/style"
import { Logo } from "./Logo"
import Agodee from "../assets/logos/agodee.jpeg"
import { Icon } from "../styles/icons"
import React from "react"
import { Collapse } from 'react-collapse'

interface Props {
    // workExperienceData: WorkExperienceData;
}

export const WorkExperienceCard = (props: Props) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    return (
        <Card interactive heightFitContent onClick={() => setIsExpanded(!isExpanded)}>
            <Grid templateColumn="auto 1fr auto" gap={Style.Spacing.L}>
                <Logo image={Agodee} />
                <Box center justifyContent="start">
                    <Box>
                        <Typography block variant="caption"><strong>69 Months</strong>, 2021 - Present</Typography>
                        <Typography block variant="heading3">Software Engineer, Agodee</Typography>
                        <Typography block variant="body2">Maintain frontend side projects which use TypeScript, React, and C# for the web server.</Typography>
                    </Box>
                </Box>
                <Box center color={Style.Color.Light50}>
                    {isExpanded ? Icon.CircleChevronUp : Icon.CircleChevronDown}
                </Box>
            </Grid>
            <Collapse isOpened={isExpanded}>
                <Box paddingTop={Style.Spacing.L} paddingLeft="120px">
                    <BulletList>
                        <Typography>Kuy rai ka</Typography>
                        <Typography>Kuy rai</Typography>
                        <Typography>Kuy rai</Typography>
                        <Typography>Kuy rai</Typography>
                        <Typography>Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai </Typography>
                    </BulletList>
                </Box>
            </Collapse>
        </Card>
    )
}