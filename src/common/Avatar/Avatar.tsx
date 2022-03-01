import styled from "styled-components"

interface Props {
    image?: string,
}

const StyledImg = styled.img`
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
`;

export const Avatar = (props: Props) => {
    return (
        <StyledImg src={props.image} />
    )
}