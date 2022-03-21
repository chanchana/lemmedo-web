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

const unavailableText = 'The detail will be added soon.'

const pordeetorjai: ShowcaseData = {
    title: 'Pordeetorjai Personal Blog',
    caption: "A responsive personal blog website that introduces a Japanese-influenced marketing and organization concept. The website gives you a warm and calm sensation. Por-dee-tor-jai means satisfied in Thai.",
    imageUrl: PordeetorjaiSrc,
    categories: [Category.Web],

    details: [unavailableText],
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
    caption: "A new improved version of report database system in CERN, the international organization. The new version features UX/UI improvements, new essential features, and modern development technologies.",
    imageUrl: ValdbSrc,
    categories: [Category.Web],

    details: [unavailableText],
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
    caption: "A web application that helps your group decide where to eat more easily. It provides over ten thousand restaurants in Bangkok. This application uses a customized genetic algorithm and a rank aggregation algorithm to provide the most suitable restaurant for groups.",
    imageUrl: RestaurantRecommendationSrc,
    categories: [Category.Web, Category.App, Category.Ai],

    details: [unavailableText],
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
    caption: "This is one of my university’s AI projects. The MIDI files, including sad, happy, and clam music, were prepared, and the model was constructed using the LSTM architecture. The result is decently generated music for each emotion.",
    imageUrl: MusicAiSrc,
    categories: [Category.Ai],

    details: [unavailableText],
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
    title: 'Online Banking System Simulation',
    caption: "This is a part of the university’s database class project. The project simulates online banking behavior. It includes the mobile website that can be used for transactions and the desktop website for managers and bank officers to see the dashboards.",
    imageUrl: MockMobileBankSrc,
    categories: [Category.Web],

    details: [unavailableText],
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
    caption: "A web application that aims to reduce the time used in stores during rush hours. It can quickly calculate the shortest route, so you don’t have to endlessly walk around the store. It uses the nearest neighbor algorithm to find the shortest routes given any item's location.",
    imageUrl: RushSrc,
    categories: [Category.Web],

    details: [unavailableText],
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
    caption: "This project is a part of the university’s software engineering project. It is a carpool application that lets the university’s students and staff share the cost of public transportation, such as taxis. It features an easy-to-use user interface and a convenient in-app chat system.",
    imageUrl: TaxiSrc,
    categories: [Category.Web],

    details: [unavailableText],
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
    caption: "One of the university’s class projects. It let users track their easily-lost items. The application supports iOS devices, providing the interactive UI, which lets them see the items’ location in real-time and can provide the route to the lost items.",
    imageUrl: FostSrc,
    categories: [Category.App],

    details: [unavailableText],
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
    caption: "A puzzle RPG mobile game features chemistry-based logic in the gameplay and cute characters inspired by real-life chemistry elements. The game supported both Android and iOS platforms and was published on the Play Store (currently discontinued).",
    imageUrl: BonderBoardSrc,
    categories: [Category.Game],

    details: [unavailableText],
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