import { Box, Typography } from "../common";
import { Style } from "../styles/style";

interface Props {
    tags: string[];
}

export const Tags = (props: Props) => (
    <Box margin={`-${Style.Spacing.S}`}>
        {props.tags.map((tool, index) => (
            <Box key={`tag-${index}`} display="inline-block" borderRadius={Style.Css.BorderRadius} background={Style.Color.Dark75} padding={`${Style.Spacing.XS} ${Style.Spacing.S}`} margin={`${Style.Spacing.S} 0 ${Style.Spacing.S} ${Style.Spacing.S}`}>
                <Typography variant="body1">{tool}</Typography>
            </Box>
        ))}
    </Box>
)