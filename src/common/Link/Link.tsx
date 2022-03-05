import styled from "styled-components"

interface Props {
    url: string;
    children?: React.ReactNode;
}

const StyledSpan = styled.span`
    cursor: pointer;
    width: fit-content;
`;

export const Link = (props: Props) => {
    const handleClick = () => {
        const newWindow = window.open(props.url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <StyledSpan onClick={handleClick}>{props.children}</StyledSpan>
    )
}