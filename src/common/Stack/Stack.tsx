import React from "react";
import styled from "styled-components"

interface Props {
    vertical?: boolean;
    horizontal?: boolean;
    gap?: string;
    children?: React.ReactNode;
    marginTop?: string;
}

const StyledContainer = styled.div`
    display: block;
    position: relative;
`;

const StyledChildContainer = styled.div<Props>`
    display: ${props => props.vertical ? 'block' : props.horizontal ? 'inline-block' : 'block'};
    margin-top: ${props => props.marginTop};
    position: relative;

    &:not(:last-child) {
        margin-right: ${props => props.horizontal && props.gap};
        margin-bottom: ${props => props.vertical && props.gap};
    }
`;

export const Stack = (props: Props) => (
    <StyledContainer>
        {React.Children.map(props.children, child => (
            <StyledChildContainer {...props}>
                {child}
            </StyledChildContainer>
        ))}
    </StyledContainer>
)