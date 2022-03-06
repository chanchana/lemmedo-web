import Agodee from "../assets/logos/agodee.jpeg"

export interface WorkExperienceData {
    position: string;
    company: string;
    logoSrc: string;
    start: string; // 'month day, year'
    end: string | null; // 'month day, year
    caption: string;
    bulletDescriptions: string[];
}

const fake = {
    position: 'Software Engineer',
    company: 'Agodee',
    logoSrc: Agodee,
    start: 'May 1, 2021',
    end: null,
    caption: 'Maintain frontend side projects which use TypeScript, React, and C# for the web server.',
    bulletDescriptions: [
        'Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai',
        'msan. Sed sollicitudin, diam non molestie molestie, enim nunc lacinia leo, elementum condimentum tortor arcu non arcu. Donec ut accumsan libero. Fusce ultricies et tellus nec bibendum. Quisque lobortis vitae elit vitae efficitur. Praesent cursus',
        'ris. Cras pharetra euismod vestibulum. Aliquam sed velit erat. Duis nisl lorem, convallis in est id, finibus maximus nibh',
        ' vestibulum nulla elementum. Duis pharetra, lectus vitae pretium malesuada, ex lacus imperdiet dolor, in convallis sapien nisl vitae metu',
    ],
}

const fake2 = {
    position: 'Software Engineer',
    company: 'Agodee2',
    logoSrc: Agodee,
    start: 'May 1, 2021',
    end: 'June 30, 2021',
    caption: 'Maintain frontend side projects which use TypeScript, React, and C# for the web server.',
    bulletDescriptions: [
        'Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai Kuy rai',
        'msan. Sed sollicitudin, diam non molestie molestie, enim nunc lacinia leo, elementum condimentum tortor arcu non arcu. Donec ut accumsan libero. Fusce ultricies et tellus nec bibendum. Quisque lobortis vitae elit vitae efficitur. Praesent cursus',
        'ris. Cras pharetra euismod vestibulum. Aliquam sed velit erat. Duis nisl lorem, convallis in est id, finibus maximus nibh',
        ' vestibulum nulla elementum. Duis pharetra, lectus vitae pretium malesuada, ex lacus imperdiet dolor, in convallis sapien nisl vitae metu',
    ],
}

const fake3 = {
    position: 'Software Engineer',
    company: 'Agodee3',
    logoSrc: Agodee,
    start: 'May 1, 2020',
    end: 'August 30, 2021',
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
    fake2,
    fake3,
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

export const getYearDuration = (start: string, end: string | null): string => {
    const startYear = start.split(' ')[2];
    if (!end) {
        return `${startYear} - Present`
    }
    const endYear = end.split(' ')[2];
    if (startYear === endYear) {
        return startYear
    }
    return `${startYear} - ${endYear}`;
}