import React from "react";
import styled from "styled-components"
import { Box, Typography } from "..";
import { Style } from "../../styles/style";

interface Props {
    label?: string;
    placeholder?: string;
    rows?: number;
}

const StyledTextArea = styled.textarea`
    padding: 0;
    background: none;
    border: none;
    color: ${Style.Color.Light100};
    /* ${Style.Typography.Desktop.Heading3}; */
    font-size: 1.1rem;
    font-weight: normal;
    font-family: ${Style.Typography.FontFamily};
    background: ${Style.Color.Dark25};
    border-radius: ${Style.Css.BorderRadius};
    padding: ${Style.Spacing.XL} ${Style.Spacing.M} ${Style.Spacing.S};
    transition: all ease 0.5s, height 0s;
    display: block;
    flex-grow: 1;
    filter: brightness(100%);

    &:hover, &:focus {
        filter: brightness(120%);
        outline: none;
        box-shadow: ${Style.Css.BoxShadow.M};
    }

    &:focus {
        outline: 4px solid ${Style.Color.Light50};
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

    &${StyledTextArea}:hover, &${StyledTextArea}:focus {
        filter: brightness(120%);
        outline: none;
        box-shadow: ${Style.Css.BoxShadow.M};
    }
`;


const StyledDiv = styled.div`
    position: relative;
`

export const TextArea = (props: Props) => {
    const [scrolled, setScrolled] = React.useState(false);
    const textAreaRef = React.useRef(null)
    const handleScroll = () => {
        if (textAreaRef && textAreaRef.current) {
            console.log((textAreaRef.current as any).scrollTop)
            if ((textAreaRef.current as any).scrollTop > 0) {
                console.log('scrolled');
                setScrolled(true)
            } else {
                console.log('no scrolled');
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
                <StyledTextArea ref={textAreaRef} rows={props.rows || 4} placeholder={props.placeholder} />
            </Box>
            {props.label && <StyledLabel scrolled={scrolled}><Typography block variant="label">{props.label}</Typography></StyledLabel>}
        </StyledDiv>
    )
}