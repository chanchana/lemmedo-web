import { Box, Button } from "../common";
import { Icon } from "../styles/icons";
import { Style } from "../styles/style";

interface Props {
    opened: boolean;
    onClick: () => void;
}

export const ModalMinimizeButton = (props: Props) => (
    <Box position="absolute" opacity={props.opened ? 1 : 0} transition="all ease 0.5s" top={Style.Spacing.XXL} right={Style.Spacing.XXL} >
        <Button onClick={props.onClick} icon={Icon.DownLeftAndUpRightToCenter} />
    </Box>
)