import { Box, BulletList, Card, Grid, Typography } from "../common"
import { Style } from "../styles/style"
import { Logo } from "./Logo"
import Agodee from "../assets/logos/agodee.jpeg"
import { Icon } from "../styles/icons"
import React from "react"
import { Collapse } from 'react-collapse'
import { ResponsiveContext } from "../contexts/responsive"
import { getDuration, getYear, WorkExperienceData } from "../data/workExperiences"

interface Props {
    workExperienceData: WorkExperienceData;
}

export const WorkExperienceCard = (props: Props) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const { isMobile } = React.useContext(ResponsiveContext)
    return (
        <Card interactive heightFitContent onClick={() => setIsExpanded(!isExpanded)}>
            <Grid templateColumn="auto 1fr auto" gap={Style.Spacing.L}>
                <Logo image={props.workExperienceData.logoSrc} mobile={isMobile} />
                <Box center justifyContent="start">
                    <Box>
                        <Typography block variant="caption"><strong>{getDuration(props.workExperienceData.start, props.workExperienceData.end)}</strong>, {getYear(props.workExperienceData.start)} - {getYear(props.workExperienceData.end)}</Typography>
                        <Typography block variant="heading3">{props.workExperienceData.position}, {props.workExperienceData.company}</Typography>
                        <Typography block variant="body2">{props.workExperienceData.caption}</Typography>
                    </Box>
                </Box>
                <Box center color={Style.Color.Light50}>
                    {isExpanded ? Icon.CircleChevronUp : Icon.CircleChevronDown}
                </Box>
            </Grid>
            <Collapse isOpened={isExpanded}>
                <Box paddingTop={Style.Spacing.L} paddingLeft={isMobile ? '12px' : '120px'}>
                    <BulletList>
                        {props.workExperienceData.bulletDescriptions.map((text, index) => (
                            <Typography>{text}</Typography>
                        ))}
                    </BulletList>
                </Box>
            </Collapse>
        </Card>
    )
}