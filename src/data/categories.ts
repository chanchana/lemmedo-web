import { Icon } from '../styles/icons';
import { Style } from '../styles/style'

interface CategoryData {
    label: string,
    name: string,
    visible?: boolean,
    icon?: React.ReactNode;
    color?: string;
}

export enum Category {
    All,
    Web,
    App,
    Ai,
    Etc,
    Design,
    Automation,
    Research,
}

export const allCategory: { [key: number]: CategoryData } = {
    // Visible Category
    [Category.All]: {
        label: 'all',
        name: 'All',
        visible: true,
    },
    [Category.Web]: {
        label: 'web',
        name: 'Web',
        visible: true,
        icon: Icon.WindowRestore,
        color: Style.Color.Cyan,
    },
    [Category.App]: {
        label: 'app',
        name: 'App',
        visible: true,
        icon: Icon.MobileScreenButton,
        color: Style.Color.Orange,
    },
    [Category.Ai]: {
        label: 'ai',
        name: 'AI',
        visible: true,
        icon: Icon.ChartLine,
        color: Style.Color.Red,
    },
    [Category.Etc]: {
        label: 'etc',
        name: 'Etc',
        visible: true,
        icon: Icon.Asterisk,
    },

    // Invisible Category
    [Category.Design]: {
        label: 'design',
        name: 'Design',
        icon: Icon.PenRuler,
        color: Style.Color.Purple,
    },
    [Category.Automation]: {
        label: 'automation',
        name: 'Automation',
        icon: Icon.Gears,
        color: Style.Color.Green,
    },
    [Category.Research]: {
        label: 'research',
        name: 'Research',
        icon: Icon.Book,
        color: Style.Color.Yellow,
    },
}

export const getCategories = (onlyVisible?: boolean): CategoryData[] => {
    return Object.entries(allCategory).map(([, value]) => value).filter(v => v.visible || !onlyVisible);
}