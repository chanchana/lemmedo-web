import styled from "styled-components"
import { Box } from "..";
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
    extended?: boolean;
}

const extendedSpace = Style.Spacing.L;

const StyledDiv = styled.div<Props>`
    position: relative;
    overflow: hidden;
    ${props => props.extended && `
        margin: 0 -${extendedSpace};
    `}
`;

const StyledOverflowedDiv = styled.div<Props>`
    overflow: scroll;
    width: 100%;
`;

const ExtendedLeftOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${Style.Gradient.FadeDarkLeft};
    width: ${extendedSpace};
`;

const ExtendedRightOverlay = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background: ${Style.Gradient.FadeDarkRight};
    width: ${extendedSpace};
`;

export const OverflowBox = (props: Props) => {
    const extendedPadding = <Box minWidth={extendedSpace} />
    return (
        <StyledDiv {...props}>
            <StyledOverflowedDiv>
                <Box displayFlex>
                    {props.extended && extendedPadding}
                    <Box>
                        {props.children}
                    </Box>
                    {props.extended && extendedPadding}
                </Box>
            </StyledOverflowedDiv>
            {props.extended && <ExtendedLeftOverlay />}
            {props.extended && <ExtendedRightOverlay />}
        </StyledDiv>
    )
}