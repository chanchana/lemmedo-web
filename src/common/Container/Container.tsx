import { Box } from ".."
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
}

const width = `calc(100% - (2 * ${Style.Spacing.L}))`
const maxWidth = Style.Css.MaxContainerWidth;

export const Container = (props: Props) => {
    return (
        <Box display="flex" width="100%">
            <Box maxWidth={maxWidth} margin="0 auto" width={width}>
                {props.children}
            </Box>
        </Box>
    )
}