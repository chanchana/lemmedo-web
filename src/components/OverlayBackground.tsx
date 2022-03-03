import styled from "styled-components";

export const OverlayBackground = styled.div<{isOpened: boolean, unsetZIndex?: boolean}>`
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s;
    background: ${props => props.isOpened ? '#00000099' : '#00000000'};
    pointer-events: ${props => props.isOpened ? 'all' : 'none'};
    z-index: ${props => !props.unsetZIndex && 999};
`;