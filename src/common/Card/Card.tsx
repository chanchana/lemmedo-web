import styled, { CSSProperties } from "styled-components"
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
    noPadding?: boolean;
    imageUrl?: string;
    withImagePadding?: boolean;
    width?: string;
    padding?: string;
    interactive?: boolean;
    maxWidth?: string;
    imageHeight?: string;
    heightFitContent?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
}

const transition = 'all ease 0.5s'

const StyledDiv = styled.div<Props>`
    background: ${Style.Color.Dark50};
    border-radius: ${Style.Css.BorderRadius};
    box-shadow: ${Style.Css.BoxShadow.S};
    width: ${props => props.width};
    transition: ${transition};
    max-width: ${props => props.maxWidth};
    overflow: scroll;
    pointer-events: all;
    position: relative;
    height: ${props => props.heightFitContent && 'fit-content'};

    ${props => props.interactive && `
        cursor: pointer;
        &:hover {
            background: ${Style.Color.Dark25};
            box-shadow: ${Style.Css.BoxShadow.L};
        }
    `}
`;

const StyledContentDiv = styled.div<Props>`
    padding: ${props => props.padding || (!props.noPadding && Style.Spacing.L)};
`;

const StyledImageContainer = styled.div<Props>`
    height: ${props => props.imageHeight || '320px'};
    transition: ${transition};
    overflow: hidden;
    padding: 0;
    ${props => props.withImagePadding && `
        padding: ${Style.Spacing.L};
    `}
`;

const StyledImg = styled.img<{ withImagePadding?: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${transition};
    border-radius: ${Style.Css.BorderRadius} ${Style.Css.BorderRadius} 0 0;
    ${props => props.withImagePadding && `
        border-radius: ${Style.Css.BorderRadius};
    `}
`;

export const Card = (props: Props) => {
    return (
        <StyledDiv {...props} onClick={props.onClick} style={props.style}>
            {props.imageUrl && <StyledImageContainer {...props}>
                <StyledImg src={props.imageUrl} withImagePadding={props.withImagePadding} />
            </StyledImageContainer>}
            <StyledContentDiv {...props}>
                {props.children}
            </StyledContentDiv>
        </StyledDiv>
    )
}