import KMUTT from '../assets/logos/kmutt.png'

export interface EducationData {
    duration: string;
    program: string;
    institute: string;
    logoSrc: string;
    caption: string;
}

const fake = {
    duration: '2017 - 2021',
    program: 'Computer Engineering (International Program)',
    institute: 'King Mongkut\'s University of Technology Thonburi',
    logoSrc: KMUTT,
    caption: 'GPAX: 500 out of 4.00',
}

export const educations: EducationData[] = [
    fake
]
