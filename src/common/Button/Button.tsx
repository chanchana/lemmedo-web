import styled, { CSSProperties } from "styled-components";
import { Box, Typography } from "..";
import { Style } from "../../styles/style";

interface Props {
    variant?: 'large' | 'normal' | 'small';
    large?: boolean;
    small?: boolean;
    children?: React.ReactNode;
    backgroundColor?: string;
    noFilled?: boolean;
    color?: string;
    icon?: React.ReactNode;
    noShadow?: boolean;
    style?: CSSProperties;
    block?: boolean;
    onClick?: () => void;
}

const filterCss = `
position: absolute;
width: 100%;
height: 100%;
opacity: 0;
top: 0;
left: 0;
transition: all ease 0.5s;
border-radius: ${Style.Css.BorderRadius};
`;

export const WhiteFilter = styled.div`
    ${filterCss}
    background: #ffffff30;
`

export const BlackFilter = styled.div`
    ${filterCss}
    background: #00000030;
`

const StyledDiv = styled.div<Props>`
    position: relative;
    cursor: pointer;
    display: ${props => props.block ? 'block' : 'inline-block'};
    padding: ${props => props.variant === 'large' ? '16px 28px' : props.variant === 'normal' ? '12px 24px' : '4px 12px'};
    border-radius: ${Style.Css.BorderRadius};
    background: ${props => props.backgroundColor || (!props.noFilled && Style.Color.Dark25)};
    box-shadow: ${props => (!props.noFilled && !props.noShadow) && Style.Css.BoxShadow.M};
    text-shadow: ${props => !props.noFilled && props.backgroundColor && '0px 0px 24px rgb(0 0 0 / 50%)'};
    transition: all ease 0.5s;
    pointer-events: all;

    &:hover {
        box-shadow: ${props => (!props.noFilled && !props.noShadow) && Style.Css.BoxShadow.L};
        background: ${props => props.noFilled && Style.Color.Dark100};
        ${WhiteFilter} {
            opacity: 1;
        }
    }

    &:active {
        background: ${props => props.noFilled && Style.Color.Dark100};
        box-shadow: 'none';
        transition: all ease 0s;
        ${WhiteFilter} {
            transition: all ease 0s;
            opacity: 0;
        }
        ${BlackFilter} {
            transition: all ease 0s;
            opacity: 1;
        }
    }
`;

export const Button = (props: Props) => {
    const variant = props.variant || (props.small && 'small') || (props.large && 'large') || 'normal';
    const styleProps: Props = {
        ...props,
        variant,
    }
    const typographyVariant = variant === 'large' ? 'button1' : 'button2';
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (props.onClick) props.onClick();
    }
    return (
        <div onClick={handleClick}>
            <StyledDiv {...styleProps}>
                <Typography variant={typographyVariant} color={props.color || Style.Color.Light100}>
                    {props.icon && <Box display="inline-block" marginRight={props.children ? Style.Spacing.S : 0}>{props.icon}</Box>}
                    {props.children}
                </Typography>
                <WhiteFilter />
                <BlackFilter />
            </StyledDiv>
        </div>
    );
}