import { Box } from "../common"
import { Style } from "../styles/style"

interface Props {
    image: string
    mobile?: boolean
}

const desktopSize = "56px"
const mobileSize = "42px"

export const Logo = (props: Props) => {
    const size = props.mobile ? mobileSize : desktopSize
    return (
        <Box width={size} height={size} borderRadius={Style.Css.BorderRadius} padding={Style.Spacing.S} display="flex" alignItems="center" background="#ffffff">
            <img src={props.image} style={{objectFit: 'fill', width: '100%'}} />
        </Box>
    )
}