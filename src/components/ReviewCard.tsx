import { Box, Card, Typography } from "../common"
import { Style } from "../styles/style";
import { ReviewData } from "../data/reviews";
import { PeopleDisplay } from "./PeopleDisplay";
import { ResponsiveContext } from "../contexts/responsive";
import React from "react";

interface Props {
    data: ReviewData;
}

export const ReviewCard = (props: Props) => {
    const { isMobile } = React.useContext(ResponsiveContext)
    const cardWidth = isMobile ? '260px' : '380px'
    return (
        <Card width={cardWidth} heightFitContent>
            <PeopleDisplay people={props.data.people} label={props.data.role} />
            <Box marginTop={Style.Spacing.S}>
                <Typography variant="body1">{props.data.message}</Typography>
            </Box>
        </Card>
    )
}