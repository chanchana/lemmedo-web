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
        caption: 'Full-hosted service and website development, responsive website.',
        icon: getIconWithColor(allCategory[Category.Web].icon, allCategory[Category.Web].color),
    },
    {
        title: 'App Development',
        caption: 'iOS and Android applications, Desktop applications development.',
        icon: getIconWithColor(allCategory[Category.App].icon, allCategory[Category.App].color),
    },
    {
        title: 'Data Science & AI',
        caption: 'Data analysis, visualization, machine learning model construction.',
        icon: getIconWithColor(allCategory[Category.Ai].icon, allCategory[Category.Ai].color),
    },
    {
        title: 'Design',
        caption: 'Graphic design, logo design, poster design, UX/UI design.',
        icon: getIconWithColor(allCategory[Category.Design].icon, allCategory[Category.Design].color),
    },
    {
        title: 'Automation',
        caption: 'CI/CD integration, infrastructure orchestration, system automation.',
        icon: getIconWithColor(allCategory[Category.Automation].icon, allCategory[Category.Automation].color),
    },
    {
        title: 'Research & Development',
        caption: 'Technology and innovation research, product improvement.',
        icon: getIconWithColor(allCategory[Category.Research].icon, allCategory[Category.Research].color),
    },
]