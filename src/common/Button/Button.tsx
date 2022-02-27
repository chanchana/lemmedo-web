import styled from "styled-components";
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
    onClick?: () => void;
}

const StyledDiv = styled.div<Props>`
    position: relative;
    cursor: pointer;
    display: inline-block;
    padding: ${props => props.variant === 'large' ? '16px 28px' : props.variant === 'normal' ? '12px 24px' : '4px 12px'};
    border-radius: ${Style.Css.BorderRadius};
    background: ${props => props.backgroundColor || (!props.noFilled && Style.Color.Dark25)};
    box-shadow: ${props => !props.noFilled && Style.Css.BoxShadow.M};
    text-shadow: ${props => !props.noFilled && props.backgroundColor && '0px 0px 24px rgb(0 0 0 / 70%)'};
    filter: brightness(100%);
    transition: all ease 0.5s;
    pointer-events: all;

    &:hover {
        box-shadow: ${props => !props.noFilled && Style.Css.BoxShadow.L};
        background: ${props => props.noFilled && Style.Color.Dark100};
        filter: brightness(150%);
    }

    &:active {
        background: ${props => props.noFilled && Style.Color.Dark100};
        box-shadow: 'none';
        filter: brightness(80%);
        transition: all ease 0s;
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
        console.log('on handleclick')
        e.stopPropagation();
        console.log('hereee')
        console.log(props.onClick)
        if (props.onClick) props.onClick();
    }
    return (
        <div onClick={handleClick}>
            <StyledDiv {...styleProps}>
                <Typography variant={typographyVariant} color={props.color || Style.Color.Light100}>
                    {props.icon && <Box display="inline-block" marginRight={props.children ? Style.Spacing.S : 0}>{props.icon}</Box>}
                    {props.children}
                </Typography>
            </StyledDiv>
        </div>
    );
}