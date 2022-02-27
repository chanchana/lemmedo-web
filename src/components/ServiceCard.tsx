import { Box, Card, Typography } from "../common"
import { Style } from "../styles/style"

interface Props {
    title: string;
    caption: string;
    icon: React.ReactNode;
}

export const ServiceCard = (props: Props) => {
    return (
        <Card>
            <Box fontSize={36}>
                {props.icon}
            </Box>
            <Typography block variant="heading3" marginTop={Style.Spacing.S}>{props.title}</Typography>
            <Typography block variant="body1" marginTop={Style.Spacing.XS}>{props.caption}</Typography>
        </Card>
    )
}