import SampleImage from "../assets/showcases/sample.jpg";
import { allCategory, Category } from "./categories";

export interface ShowcaseData {
    title: string;
    caption: string;
    imageUrl?: string;
    categories: Category[];
}

const fake: ShowcaseData = {
    title: "Pordeetorjai Personal Website",
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    imageUrl: SampleImage,
    categories: [Category.Web, Category.Ai],
}

export const showcases: ShowcaseData[] = [fake, fake, fake, fake, fake, fake, fake, fake, fake, fake, fake];

export const getShowcasesByCategory = (category: Category) => {
    if (category === Category.All) {
        return showcases;
    }
    if (category === Category.Etc) {
        return showcases.filter(showcase => showcase.categories.some(c => !allCategory[c].visible));
    }
    return showcases.filter(showcase => showcase.categories.includes(category));
}