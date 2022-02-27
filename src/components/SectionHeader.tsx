import { Box, Typography } from "../common";
import { Style } from "../styles/style";

interface Props {
    title: string,
    title2?: string,
    subtitle: string,
    children?: React.ReactNode;
    largeTitle?: boolean;
}

const maxWidth = 556;
const marginTop = 96;
const marginBottom = 48;

export const SectionHeading = (props: Props) => {
    const titleVariant = props.largeTitle ? 'heading1' : 'heading2'
    return (
        <Box center marginTop={marginTop} marginBottom={marginBottom}>
            <Box maxWidth={maxWidth} textAlign="center">
                <Typography fullWidth variant={titleVariant} block>{props.title}</Typography>
                {props.title2 && <Typography fullWidth variant={titleVariant} block>{props.title2}</Typography>}
                <Typography variant="caption" block marginTop={Style.Spacing.M}>{props.subtitle}</Typography>
                {props.children && <Box marginTop={Style.Spacing.M}>{props.children}</Box>}
            </Box>
        </Box>
    )
}