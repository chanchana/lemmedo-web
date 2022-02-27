import { Box } from ".."
import { Style } from "../../styles/style";

interface Props {
    children?: React.ReactNode;
}

const maxWidth = Style.Css.MaxContainerWidth;

export const Container = (props: Props) => {
    return (
        <Box display="flex" width="100%">
            <Box maxWidth={maxWidth} margin="0 auto" width="100%" padding={`0 ${Style.Spacing.XL}`}>
                {props.children}
            </Box>
        </Box>
    )
}