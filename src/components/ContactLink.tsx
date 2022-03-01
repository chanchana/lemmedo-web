import { Tooltip } from "../common";
import { ContactData } from "../data/contact";
import { ExternalLink } from "./ExternalLink";

interface Props {
    contactData: ContactData;
}

export const ContactLink = (props: Props) => (
    <Tooltip label={props.contactData.name}>
        <ExternalLink text={props.contactData.label} url={props.contactData.url} icon={props.contactData.icon}/>
    </Tooltip>
)