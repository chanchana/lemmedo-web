import { getIconWithColor } from '../styles/icons'
import { Category, allCategory } from './categories'

interface ServiceContent {
    title: string;
    caption: string;
    icon: React.ReactNode;
}

export const serviceContents: ServiceContent[] = [
    {
        title: 'Web Development',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.Web].icon, allCategory[Category.Web].color),
    },
    {
        title: 'App Development',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.App].icon, allCategory[Category.App].color),
    },
    {
        title: 'Data Science & AI',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.Ai].icon, allCategory[Category.Ai].color),
    },
    {
        title: 'Design',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.Design].icon, allCategory[Category.Design].color),
    },
    {
        title: 'Task Automation',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.Automation].icon, allCategory[Category.Automation].color),
    },
    {
        title: 'Research & Development',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi ',
        icon: getIconWithColor(allCategory[Category.Research].icon, allCategory[Category.Research].color),
    },
]