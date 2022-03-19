import React from "react";
import styled from "styled-components"
import { Box, Typography } from "..";
import { Style } from "../../styles/style";

interface Props {
    label?: string;
    placeholder?: string;
    rows?: number;
    register?: any;
    name?: string;
}

const StyledTextArea = styled.textarea`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: ${Style.Color.Light100};
    min-height: 120px;
    font-size: 1.1rem;
    font-weight: normal;
    font-family: ${Style.Typography.FontFamily};
    background: ${Style.Color.Dark25};
    border-radius: ${Style.Css.BorderRadius};
    padding: ${Style.Spacing.XL} ${Style.Spacing.M} ${Style.Spacing.S};
    transition: all ease 0.5s, height 0s;
    display: block;
    flex-grow: 1;

    &:hover, &:focus, &:active {
        outline: none;
        box-shadow: ${Style.Css.NormalOutlineBoxShadow},${Style.Css.BoxShadow.M};
        background: ${Style.FilteredColor.Dark25White};
    }

    &:focus, &:active {
        box-shadow: ${Style.Css.HoverOutlineBoxShadow},${Style.Css.BoxShadow.M};
    }

    &::placeholder {
        font-weight: normal;
        vertical-align: bottom;
    }
`;


const StyledLabel = styled.div<{scrolled: boolean}>`
    position: absolute;
    top: ${Style.Spacing.S};
    left: ${Style.Spacing.M};
    transition: all ease 0.5s;
    opacity: ${props => props.scrolled ? 0 : 1};
`;


const StyledDiv = styled.div`
    position: relative;
`

export const TextArea = (props: Props) => {
    const [scrolled, setScrolled] = React.useState(false);
    const textAreaRef = React.useRef(null)
    const handleScroll = () => {
        if (textAreaRef && textAreaRef.current) {
            if ((textAreaRef.current as any).scrollTop > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
    }

    React.useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            (textAreaRef.current as any).addEventListener('scroll', handleScroll);
        }
    })

    return (
        <StyledDiv>
            <Box display="flex">
                <StyledTextArea ref={textAreaRef} rows={props.rows || 4} placeholder={props.placeholder} {...props.register(props.name)} />
            </Box>
            {props.label && <StyledLabel scrolled={scrolled}><Typography block variant="label">{props.label}</Typography></StyledLabel>}
        </StyledDiv>
    )
}