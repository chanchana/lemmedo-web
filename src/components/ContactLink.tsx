import { Tooltip, Box } from "../common";
import { ContactData } from "../data/contact";
import { ExternalLink } from "./ExternalLink";

interface Props {
    contactData: ContactData;
}

export const ContactLink = (props: Props) => (
    <Tooltip label={props.contactData.name}>
        <Box center>
            <ExternalLink text={props.contactData.label} url={props.contactData.url} icon={props.contactData.icon}/>
        </Box>
    </Tooltip>
)