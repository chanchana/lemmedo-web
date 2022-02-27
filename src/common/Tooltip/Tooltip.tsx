import styled from "styled-components"
import { Typography } from ".."
import { Style } from "../../styles/style"

interface Props {
    label: string;
    children: React.ReactNode;
}

const StyledTooltipContainer = styled.div`
    transition: all ease 0.5s;
    position: absolute;
    opacity: 0;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    pointer-events: none;
`

const StyledTooltip = styled.div`
    background: ${Style.Color.Dark100};
    padding: ${Style.Spacing.XS} ${Style.Spacing.S};
    border-radius: ${Style.Css.BorderRadius};
`

const StyledDiv = styled.div`
    position: relative;
    width: fit-content;
    &:hover ${StyledTooltipContainer} {
        top: -${Style.Spacing.XXL};
        opacity: 1;
    }
`

export const Tooltip = (props: Props) => {
    return (
        <StyledDiv>
            {props.children}
            <StyledTooltipContainer>
                <StyledTooltip>
                    <Typography variant="body2">{props.label}</Typography>
                </StyledTooltip>
            </StyledTooltipContainer>
        </StyledDiv>
    )
}