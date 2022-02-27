import React from 'react';
import { Style } from '../../styles/style';
import Styled from 'styled-components';
import { getTextGradient, textAnimatedGradient } from '../../styles/utils';

interface Props {
    variant?: 'heading1' | 'heading2' | 'heading3' | 'heading4' |
        'caption' | 'body1' | 'body2' | 'body3' |
        'label' | 'button1' | 'button2';
    color?: string;
    gradient?: string;
    animatedGradient?: boolean;
    children?: React.ReactNode;
    noWrap?: boolean;
    marginTop?: string | number;
    block?: boolean;
    interactive?: boolean;
    fullWidth?: boolean;
}

const StyledDiv = Styled.div<Props>`
    ${props => !props.animatedGradient && props.color && `color: ${props.color};`}
    ${props => !props.animatedGradient && props.gradient && getTextGradient(props.gradient)}
    ${props => props.animatedGradient && textAnimatedGradient}
    display: ${props => props.block ? 'block' : 'inline'};
    white-space: ${props => props.noWrap && 'nowrap'};
    margin-top: ${props => props.marginTop};
    transition: all ease 0.5s;
    width: ${props => !props.fullWidth && 'fit-content'};
    ${props => props.interactive && `
        cursor: pointer;
        &:hover {
            color: ${Style.Color.Purple}
        }
    `}
`

export const Typography = (props: Props) => {
    const color =
        props.color ? props.color :
        !props.gradient && props.variant?.includes('heading') ? Style.Color.Light100 :
        (props.variant === 'body1' && !props.color) ? Style.Color.Light75 :
        (props.color === 'secondary' || !props.color) ? Style.Color.Light50 :
        props.color;
    return (
        <StyledDiv className={props.variant} {...props} color={color}>{props.children}</StyledDiv>
    );
};