import { Box } from "../common"
import { Style } from "../styles/style"

interface Props {
    image: string
}

const size = "56px"

export const Logo = (props: Props) => {
    return (
        <Box width={size} height={size} borderRadius={Style.Css.BorderRadius} padding={Style.Spacing.S} display="flex" alignItems="center" background="#ffffff">
            <img src={props.image} style={{objectFit: 'fill', width: '100%'}} />
        </Box>
    )
}