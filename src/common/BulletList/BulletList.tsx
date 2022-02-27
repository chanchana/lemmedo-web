import React from "react";
import styled from "styled-components"
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
}

const StyledUl = styled.ul`
    list-style-position: outside;
    color: ${Style.Color.Light50};
    margin: 0;
    padding: 0;
`;

const StyledLi = styled.li`
    &:not(:last-child) {
        margin-bottom: ${Style.Spacing.XS};
    }
`;

export const BulletList = (props: Props) => {
    return (
        <StyledUl>
            {React.Children.map(props.children, child => (
                <StyledLi>
                    {child}
                </StyledLi>
            ))}
        </StyledUl>
    )
}