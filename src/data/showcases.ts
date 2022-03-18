import BonderBoardSrc from "../assets/projects/bonder_board.png";
import FostSrc from "../assets/projects/fost.png";
import MockMobileBankSrc from "../assets/projects/mock_mobile_bank.png";
import MusicAiSrc from "../assets/projects/music_ai.png";
import PordeetorjaiSrc from "../assets/projects/pordeetorjai.png";
import RestaurantRecommendationSrc from "../assets/projects/restaurant_recommendation.png";
import RushSrc from "../assets/projects/rush.png";
import TaxiSrc from "../assets/projects/taxi.png";
import ValdbSrc from "../assets/projects/valdb.png";
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

const longString = 'Lorem ipsum dolor sit amet, consecte amet, consectetur adipiscing elit. Phasellus pretiumng elit. Phndum. Pellentesque ac. dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.'

const pordeetorjai: ShowcaseData = {
    title: 'Pordeetorjai Personal Blog',
    caption: longString,
    imageUrl: PordeetorjaiSrc,
    categories: [Category.Web],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'Frontity', 'Wordpress API'],
    images: [
        { label: 'Pordeetorjai', imageUrl: PordeetorjaiSrc },
    ],
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

const valdb: ShowcaseData = {
    title: 'ValDB, Validation Report Database System',
    caption: longString,
    imageUrl: ValdbSrc,
    categories: [Category.Web],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'Python', 'MongoDB', 'Github Actions'],
    images: [
        { label: 'ValDB', imageUrl: ValdbSrc },
    ],
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
}

const restaurantRecommendation: ShowcaseData = {
    title: 'Restaurant Recommender for Individuals and Groups',
    caption: longString,
    imageUrl: RestaurantRecommendationSrc,
    categories: [Category.Web, Category.App, Category.Ai],

    details: [longString, longString],
    tools: ['TypeScript', 'React', 'ExpressJS', 'Python', 'MongoDB', 'Google Cloud'],
    images: [
        { label: 'Restaurant Recommender for Individuals and Groups', imageUrl: RestaurantRecommendationSrc },
    ],
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
    date: '2021'
}

const musicAi: ShowcaseData = {
    title: 'Emotion-based Music Generation',
    caption: longString,
    imageUrl: MusicAiSrc,
    categories: [Category.Ai],

    details: [longString, longString],
    tools: ['Python', 'Keras'],
    images: [
        { label: 'Emotion-based Music Generation', imageUrl: MusicAiSrc },
    ],
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
    externalLinks: [
        {label: 'youtube.com', url: 'https://youtube.com/playlist?list=PL8PhxX1MpuSz1fd6xvR8DjV5uYN6x4DNu'},
    ],
    date: '2020'
}

const mockMobileBanking: ShowcaseData = {
    title: 'Mobile Banking System Simulation',
    caption: longString,
    imageUrl: MockMobileBankSrc,
    categories: [Category.Web],

    details: [longString, longString],
    tools: ['JavaScript', 'Vue', 'Python', 'MySQL'],
    images: [
        { label: 'Mobile Banking System Simulation', imageUrl: MockMobileBankSrc },
    ],
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
    date: '2019'
}

const rush: ShowcaseData = {
    title: 'RUSH, Store Navigation',
    caption: longString,
    imageUrl: RushSrc,
    categories: [Category.Web],

    details: [longString, longString],
    tools: ['JavaScript', 'Vue', 'Python', 'MySQL'],
    images: [
        { label: 'RUSH', imageUrl: RushSrc },
    ],
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
    date: '2019'
}

const taxi: ShowcaseData = {
    title: 'Taxi, Carpool Application',
    caption: longString,
    imageUrl: TaxiSrc,
    categories: [Category.Web],

    details: [longString, longString],
    tools: ['JavaScript', 'Vue', 'Python', 'MongoDB'],
    images: [
        { label: 'Taxi', imageUrl: TaxiSrc },
    ],
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
    date: '2019'
}

const fost: ShowcaseData = {
    title: 'Fost, Lost and found, Item Finder Application',
    caption: longString,
    imageUrl: FostSrc,
    categories: [Category.App],

    details: [longString, longString],
    tools: ['Swift', 'NodeJS'],
    images: [
        { label: 'Fost', imageUrl: FostSrc },
    ],
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
    date: '2018'
}

const bonderBoard: ShowcaseData = {
    title: 'Bonder Board, Chemistry Puzzle RPG Mobile Game',
    caption: longString,
    imageUrl: BonderBoardSrc,
    categories: [Category.Game],

    details: [longString, longString],
    tools: ['C#', 'Unity'],
    images: [
        { label: 'Bonder Board', imageUrl: BonderBoardSrc },
    ],
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
    date: '2018'
}

export const showcases: ShowcaseData[] = [
    pordeetorjai,
    valdb,
    restaurantRecommendation,
    musicAi,
    mockMobileBanking,
    rush,
    taxi,
    fost,
    bonderBoard,
];

export const getShowcasesByCategory = (category: Category) => {
    if (category === Category.All) {
        return showcases;
    }
    if (category === Category.Etc) {
        return showcases.filter(showcase => showcase.categories.some(c => !allCategory[c].visible));
    }
    return showcases.filter(showcase => showcase.categories.includes(category));
}