import Agodee from "../assets/logos/agodee.jpeg"

export interface WorkExperienceData {
    position: string;
    company: string;
    logoSrc: string;
    start: string; // 'month, year'
    end: string | null; // 'month, year
    caption: string;
    bulletDescriptions: string[];
}

const fake = {
    position: 'Software Engineer',
    company: 'Agodee',
    logoSrc: Agodee,
    start: 'May, 2021',
    end: null,
    caption: 'Maintain frontend side projects which use TypeScript, React, and C# for the web server.',
    bulletDescriptions: [
        'Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai',
        'msan. Sed sollicitudin, diam non molestie molestie, enim nunc lacinia leo, elementum condimentum tortor arcu non arcu. Donec ut accumsan libero. Fusce ultricies et tellus nec bibendum. Quisque lobortis vitae elit vitae efficitur. Praesent cursus',
        'ris. Cras pharetra euismod vestibulum. Aliquam sed velit erat. Duis nisl lorem, convallis in est id, finibus maximus nibh',
        ' vestibulum nulla elementum. Duis pharetra, lectus vitae pretium malesuada, ex lacus imperdiet dolor, in convallis sapien nisl vitae metu',
    ],
}

export const workExperiences: WorkExperienceData[] = [
    fake,
    fake,
    fake,
    fake,
    fake,
    fake,
]

export const getDuration = (start: string, end: string | null): string => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    var months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    if (months < 12) {
        return `${months} Months`;
    } else {
        return `${(months/12).toFixed(1)} Years`;
    }
}

export const getYear = (date: string | null): string => {
    if (date) {
        return date.split(' ')[1];
    }
    return 'Present';
}