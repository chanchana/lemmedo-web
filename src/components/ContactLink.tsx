import { Box, Link, Tooltip, Typography } from "../common";
import { ContactData } from "../data/contact";
import { Style } from "../styles/style";

interface Props {
    contactData: ContactData;
}

export const ContactLink = (props: Props) => (
    <Tooltip label={props.contactData.name}>
        <Link url={props.contactData.url}>
            <Typography interactive variant="body1">
                <Box display="inline" marginRight={Style.Spacing.S}>
                    {props.contactData.icon}
                </Box>
                {props.contactData.label}
            </Typography>
        </Link>
    </Tooltip>
)