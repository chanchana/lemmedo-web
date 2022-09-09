import styled from "styled-components";
import { Box, Button } from "../common";
import { getIconWithColor, Icon } from "../styles/icons";
import { Style } from "../styles/style";

interface Props {
    opened: boolean;
    onClick: () => void;
    isMobile?: boolean;
}

const MobileButtonContainer = styled.div<{opacity: number}>`
    position: fixed;
    top: ${Style.Spacing.L};
    right: ${Style.Spacing.L};
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.5s;
    opacity: ${props => props.opacity};
`

const MobileButton = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Style.Color.Light100};
    background: #000000a0;
`

export const ModalMinimizeButton = (props: Props) => (
    props.isMobile ?
    <MobileButtonContainer opacity={props.opened ? 1 : 0} onClick={props.onClick}>
        <MobileButton>
            {getIconWithColor(Icon.XMark, Style.Color.Dark100)}
        </MobileButton>
    </MobileButtonContainer>
    :
    <Box position="absolute" opacity={props.opened ? 1 : 0} transition="all ease 0.5s" top={Style.Spacing.XXL} right={Style.Spacing.XXL}>
        <Button  onClick={props.onClick} icon={Icon.DownLeftAndUpRightToCenter} />
    </Box>
)