import styled from "styled-components";
import { Box, Link, Tooltip } from "../common";
import { ContactData } from "../data/contact";
import { Style } from "../styles/style";

interface Props {
    contactData: ContactData;
}

const size = '48px'
const iconSize = '20px'

const SocialButton = styled.div<{background?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background: ${props => props.background || Style.Color.Dark25};
    outline: 0px solid ${Style.Color.Dark25};
    transition: all ease 0.5s;

    &:hover {
        box-shadow: ${Style.Css.HoverOutlineBoxShadow},${Style.Css.BoxShadow.M};
    }
`;

export const SocialContactLink = (props: Props) => (
    <Tooltip label={props.contactData.name}>
        <Link url={props.contactData.url}>
            <SocialButton background={props.contactData.iconColor}>
                <Box fontSize={iconSize} color="#ffffff">
                    {props.contactData.icon}
                </Box>
            </SocialButton>
        </Link>
    </Tooltip>
)