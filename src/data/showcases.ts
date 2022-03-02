import SampleImage from "../assets/showcases/sample.jpg";
import { fakeImage } from "./activities";
import { allCategory, Category } from "./categories";
import { Image } from "./image";
import { people, People } from "./people";

export interface ShowcaseData {
    title: string;
    caption: string;
    imageUrl?: string;
    categories: Category[];

    details?: string[];
    tools?: string[];
    images?: Image[];
    contributors?: Contributor[];
    date: string;
    externalLinks?: Link[];
}

export interface Contributor {
    people: People,
    responsibility: string,
}

export interface Link {
    url: string,
    label?: string,
}

const longString = 'Lorem ipsum dolor sit amet, consecte amet, consectetur adipiscing elit. Phasellus pretiumng elit. Phasellus pretium a mi et bibendum. Pellentesque ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.'

const fake: ShowcaseData = {
    title: "Pordeetorjai Personal Website",
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    imageUrl: SampleImage,
    categories: [Category.Web, Category.Ai],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'Python'],
    images: [fakeImage, fakeImage, fakeImage, fakeImage],
    contributors: [
        {
            people: people.chanchana,
            responsibility: 'Be me',
        },
        {
            people: people.sample,
            responsibility: 'UX/UI Designer',
        },
        {
            people: people.chanchana,
            responsibility: 'Sleeper',
        },
    ],
    date: '2021',
    externalLinks: [
        { label: 'pordeetorjai.com', url: 'https://www.pordeetorjai.com' }
    ]
}

const fakeApp: ShowcaseData = {
    title: "Pordeetorjai Personal Application",
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    imageUrl: SampleImage,
    categories: [Category.App],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'Python'],
    images: [fakeImage, fakeImage, fakeImage, fakeImage],
    contributors: [
        {
            people: people.chanchana,
            responsibility: 'Be me',
        },
        {
            people: people.sample,
            responsibility: 'UX/UI Designer',
        },
        {
            people: people.chanchana,
            responsibility: 'Sleeper',
        },
    ],
    date: '2021',
    externalLinks: [
        { label: 'pordeetorjai.com', url: 'https://www.pordeetorjai.com' }
    ]
}

const fakeEtc: ShowcaseData = {
    title: "Pordeetorjai Personal Script",
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    imageUrl: SampleImage,
    categories: [Category.Automation],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'Python'],
    images: [fakeImage, fakeImage, fakeImage, fakeImage],
    contributors: [
        {
            people: people.chanchana,
            responsibility: 'Be me',
        },
        {
            people: people.sample,
            responsibility: 'UX/UI Designer',
        },
        {
            people: people.chanchana,
            responsibility: 'Sleeper',
        },
    ],
    date: '2021',
    externalLinks: [
        { label: 'pordeetorjai.com', url: 'https://www.pordeetorjai.com' }
    ]
}

export const showcases: ShowcaseData[] = [fake, fakeApp, fakeEtc, fake, fake, fake, fake, fake, fake, fakeApp, fake, fake, fake, fake];

export const getShowcasesByCategory = (category: Category) => {
    if (category === Category.All) {
        return showcases;
    }
    if (category === Category.Etc) {
        return showcases.filter(showcase => showcase.categories.some(c => !allCategory[c].visible));
    }
    return showcases.filter(showcase => showcase.categories.includes(category));
}