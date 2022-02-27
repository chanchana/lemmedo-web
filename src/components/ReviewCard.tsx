import { Avatar, Box, Card, Typography } from "../common"
import SampleFace from '../assets/reviews/sample.png';
import { Style } from "../styles/style";
import { ReviewData } from "../data/reviews";

interface Props {
    data: ReviewData;
}

export const ReviewCard = (props: Props) => {
    return (
        <Card width="380px" heightFitContent>
            <Box displayFlex>
                <Avatar image={props.data.image} />
                <Box marginLeft={Style.Spacing.S}>
                    <Typography block variant="heading4">{props.data.name}</Typography>
                    <Typography block variant="body2">{props.data.role}</Typography>
                </Box>
            </Box>
            <Box marginTop={Style.Spacing.S}>
                <Typography variant="body1">{props.data.message}</Typography>
            </Box>
        </Card>
    )
}