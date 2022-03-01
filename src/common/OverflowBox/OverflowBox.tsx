import styled from "styled-components"
import { Box } from "..";
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
    extended?: boolean;
}

const marginSpace = Style.Spacing.S;
const extendedSpace = Style.Spacing.L;

const StyledDiv = styled.div<Props>`
    position: relative;
    margin: ${props => props.extended ? `-${extendedSpace}` : `-${marginSpace}`};
`;

const StyledOverflowedDiv = styled.div<Props>`
    overflow: scroll;
    padding: ${props => props.extended ? extendedSpace : marginSpace};
`;

const ExtendedLeftOverlay = styled.div<{extended?: boolean}>`
    border-radius: ${Style.Css.BorderRadius} 0 0 ${Style.Css.BorderRadius};
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${props => props.extended ? Style.Gradient.FadeDarkLeft : Style.Gradient.FadeDark50Left};
    width: ${props => props.extended ? extendedSpace : marginSpace};
`;

const ExtendedRightOverlay = styled.div<{extended?: boolean}>`
    border-radius: 0 ${Style.Css.BorderRadius} ${Style.Css.BorderRadius} 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background: ${props => props.extended ? Style.Gradient.FadeDarkRight : Style.Gradient.FadeDark50Right};
    width: ${props => props.extended ? extendedSpace : marginSpace};
`;

export const OverflowBox = (props: Props) => {
    const extendedPadding = <Box minWidth={props.extended ? extendedSpace : marginSpace} />
    return (
        <StyledDiv {...props}>
            <StyledOverflowedDiv {...props}>
                <Box displayFlex>
                    {props.children}
                    {extendedPadding}
                </Box>
            </StyledOverflowedDiv>
            <ExtendedLeftOverlay extended={props.extended} />
            <ExtendedRightOverlay extended={props.extended} />
        </StyledDiv>
    )
}