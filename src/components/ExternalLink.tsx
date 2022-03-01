import { Typography, Box, Link } from "../common";
import { Icon } from "../styles/icons";
import { Style } from "../styles/style";

interface Props {
    text: string;
    url: string;
    icon?: React.ReactNode;
}

export const ExternalLink = (props: Props) => (
    <Link url={props.url}>
        <Typography interactive variant="body1">
            <Box display="inline" marginRight={Style.Spacing.S}>
                {props.icon || Icon.UpRightFromSquare}
            </Box>
            {props.text}
        </Typography>
    </Link>
)