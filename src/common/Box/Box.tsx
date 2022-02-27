import { CSSProperties } from "react"
import styled from "styled-components";

interface OwnProps {
    children?: React.ReactNode;
    onClick?: any;
    className?: string;
    center?: boolean;
    displayFlex?: boolean;
}

type Props = CSSProperties & OwnProps;

interface StyleProps {
    center?: boolean;
    displayFlex?: boolean;
}

const StyledDiv = styled.div<StyleProps>`
    ${props => (props.displayFlex || props.center) && 
        `display: flex;`
    }
    ${props => props.center && `
        justify-content: center;
        align-items: center;
    `}
`;

export const Box = (props: Props) => {
    return (
        <StyledDiv className={props.className} onClick={props.onClick} style={props} center={props.center} displayFlex={props.displayFlex}>
            {props.children}
        </StyledDiv>
    )
}