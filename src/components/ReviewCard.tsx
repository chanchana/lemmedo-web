import { Avatar, Box, Card, Typography } from "../common"
import SampleFace from '../assets/reviews/sample.png';
import { Style } from "../styles/style";
import { ReviewData } from "../data/reviews";
import { PeopleDisplay } from "./PeopleDisplay";

interface Props {
    data: ReviewData;
}

export const ReviewCard = (props: Props) => {
    return (
        <Card width="380px" heightFitContent>
            <PeopleDisplay people={props.data.people} label={props.data.role} />
            <Box marginTop={Style.Spacing.S}>
                <Typography variant="body1">{props.data.message}</Typography>
            </Box>
        </Card>
    )
}