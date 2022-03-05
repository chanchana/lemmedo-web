import React from 'react';
import { Collapse } from 'react-collapse';
import { Box } from '../common';
import { Style } from '../styles/style';
import { ExpandButton } from './ExpandButton';

interface Props {
    isInitialOpen?: boolean;
    children?: React.ReactNode;
}

export const Collapsible = (props: Props) => {
    const [isOpened, setIsOpened] = React.useState(props.isInitialOpen || false);

    return (
        <React.Fragment>
            <Collapse isOpened={isOpened}>
                {props.children}
            </Collapse>
            <Box center marginTop={Style.Spacing.L}>
                <ExpandButton isExpanded={isOpened} setIsExpanded={setIsOpened} />
            </Box>
        </React.Fragment>
    )
}