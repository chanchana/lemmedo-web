import { Box, Avatar, Typography } from "../common";
import { TypographyVariant } from "../common/Typography/Typography";
import { People } from "../data/people";
import { Style } from "../styles/style";

interface Props {
    people: People;
    label?: string;
    titleVariant?: TypographyVariant;
}

export const PeopleDisplay = (props: Props) => (
    <Box displayFlex>
        <Avatar image={props.people.avatarImageUrl} />
        <Box marginLeft={Style.Spacing.S}>
            <Typography block variant={props.titleVariant || 'heading4'}>{props.people.name}</Typography>
            <Typography block variant="body2">{props.label}</Typography>
        </Box>
    </Box>
)