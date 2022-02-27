import styled from "styled-components"

interface Props {
    image?: string,
}

const StyledImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

export const Avatar = (props: Props) => {
    return (
        <StyledImg src={props.image} />
    )
}