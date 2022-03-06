import styled from "styled-components"
import { Box, Typography } from "..";
import { Style } from "../../styles/style";

interface Props {
    label?: string;
    placeholder?: string;
}

const StyledInput = styled.input`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: ${Style.Color.Light100};
    ${Style.Typography.Heading3};
    font-family: ${Style.Typography.FontFamily};
    background: ${Style.Color.Dark25};
    border-radius: ${Style.Css.BorderRadius};
    padding: ${Style.Spacing.XL} ${Style.Spacing.M} ${Style.Spacing.S};
    transition: all ease 0.5s;
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


const StyledLabel = styled.div`
    position: absolute;
    top: ${Style.Spacing.S};
    left: ${Style.Spacing.M};
`;

export const TextField = (props: Props) => {
    return (
        <Box position="relative">
            <Box display="flex">
                <StyledInput placeholder={props.placeholder} />
            </Box>
            {props.label && <StyledLabel><Typography block variant="label">{props.label}</Typography></StyledLabel>}
        </Box>
    )
}