import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Box } from '../common'

export const Icon = {
    WindowRestore: <FontAwesomeIcon icon={solid('window-restore')} />,
    MobileScreenButton: <FontAwesomeIcon icon={solid('mobile-screen-button')} />,
    ChartLine: <FontAwesomeIcon icon={solid('chart-line')} />,
    Asterisk: <FontAwesomeIcon icon={solid('asterisk')} />,
    PenRuler: <FontAwesomeIcon icon={solid('pen-ruler')} />,
    Gears: <FontAwesomeIcon icon={solid('gears')} />,
    Book: <FontAwesomeIcon icon={solid('book')} />,
    ChevronDown: <FontAwesomeIcon icon={solid('chevron-down')} />,
    ChevronUp: <FontAwesomeIcon icon={solid('chevron-up')} />,
    ChevronLeft: <FontAwesomeIcon icon={solid('chevron-left')} />,
    ChevronRight: <FontAwesomeIcon icon={solid('chevron-right')} />,
    CircleChevronDown: <FontAwesomeIcon icon={solid('circle-chevron-down')} />,
    CircleChevronUp: <FontAwesomeIcon icon={solid('circle-chevron-up')} />,
    XMark: <FontAwesomeIcon icon={solid('xmark')} />,
    DownLeftAndUpRightToCenter: <FontAwesomeIcon icon={solid('down-left-and-up-right-to-center')} />,
    UpRightFromSquare: <FontAwesomeIcon icon={solid('up-right-from-square')} />,
    Bars: <FontAwesomeIcon icon={solid('bars')} />,
    Envelope: <FontAwesomeIcon icon={solid('envelope')} />,
    Comment: <FontAwesomeIcon icon={solid('comment')} />,

    // Brands
    Linkedin: <FontAwesomeIcon icon={brands('linkedin')} />,
    Github: <FontAwesomeIcon icon={brands('github')} />,
    Line: <FontAwesomeIcon icon={brands('line')} />,
    Instagram: <FontAwesomeIcon icon={brands('instagram')} />,
    Skype: <FontAwesomeIcon icon={brands('skype')} />,
    Whatsapp: <FontAwesomeIcon icon={brands('whatsapp-square')} />,
}

export const getIconWithColor = (icon: React.ReactNode, color?: string) => (
    <Box color={color}>{icon}</Box>
)