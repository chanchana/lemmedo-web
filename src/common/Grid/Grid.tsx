import styled from "styled-components"

interface Props {
    inline?: boolean;
    children?: React.ReactNode;
    gap?: string;
    columns?: number;
    marginTop?: string | number;
    flowRow?: boolean;
    templateColumn?: string;
}

const StyledDiv = styled.div<Props>`
    grid-auto-flow: ${props => (props.columns || props.flowRow) ? 'row' : 'column'};
    display: ${props => props.inline ? 'inline-grid' : 'grid'};
    gap: ${props => props.gap};
    ${props => (props.templateColumn && `grid-template-columns: ${props.templateColumn};`) || (props.columns && `grid-template-columns: repeat(${props.columns}, 1fr);`)}
    margin-top: ${props => props.marginTop};
`;

export const Grid = (props: Props) => {
    return (
        <StyledDiv {...props}>
            {props.children}
        </StyledDiv>
    )
}