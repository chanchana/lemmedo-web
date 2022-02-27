import { Box, Typography } from "../common"
import { Style } from "../styles/style"

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const Section = (props: Props) => {
    return (
        <Box overflow="hidden">
            <Typography variant="heading3">{props.title}</Typography>
            <Box marginTop={Style.Spacing.S}>
                {props.children}
            </Box>
        </Box>
    )
}