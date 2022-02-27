import React from "react"
import { Box } from "../common"
import { Style } from "../styles/style"
import { Collapse } from 'react-collapse';
import { ExpandButton } from "./ExpandButton";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    visibleCount?: number;
}

const indentWidth = '32px'
const lineRadius = '16px'
const dotSize = '24px'
const lineColor = Style.Color.Dark50
const lineStrokeColor = Style.Color.Dark75

const StyledTimelineItem = styled.div`
    display: flex;
    width: 100%;
    margin-top: ${Style.Spacing.L};
    &:first {
        margin-top: 0;
    }
`;

export const Timeline = (props: Props) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
    const isExpandable = props.visibleCount && React.Children.count(props.children) > props.visibleCount;
    return (
        <React.Fragment>
            <Box position="relative">
                {React.Children.map(props.children, (child: React.ReactNode, index: number) => (
                    <Box marginLeft={isExpandable ? '4px' : 0}>
                        <Collapse isOpened={!(props.visibleCount && !isExpanded && index > props.visibleCount - 1)}>
                            <StyledTimelineItem>
                                <Box center width={indentWidth} alignItems="baseline" paddingTop={Style.Spacing.L}>
                                    <Box width={dotSize} height={dotSize} borderRadius="50%" background={lineColor} outline={`4px solid ${lineStrokeColor}`} />
                                </Box>
                                <Box flexGrow={1} marginLeft={Style.Spacing.M}>
                                    {child}
                                </Box>
                            </StyledTimelineItem>
                        </Collapse>
                    </Box>
                ))}
                <Box displayFlex height="100%" width={indentWidth} position="absolute" top={0} left={0}>
                    <Box width="8px" background={lineColor} margin="8px auto" borderRadius={lineRadius} zIndex={-1}/>
                </Box>
            </Box>
            {isExpandable && <Box center marginTop={Style.Spacing.L}>
                <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </Box>}
        </React.Fragment>
    )
}