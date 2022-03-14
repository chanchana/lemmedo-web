import AgodaSrc from "../assets/logos/Agoda.png"
import CERNSrc from "../assets/logos/CERN.png"
import LMWNSrc from "../assets/logos/LMWN.png"
import DonutSrc from "../assets/logos/Donut.png"
import KrungsriSrc from "../assets/logos/Krungsri.png"

export interface WorkExperienceData {
    position: string;
    company: string;
    logoSrc: string;
    start: string; // 'month day, year'
    end: string | null; // 'month day, year
    caption: string;
    bulletDescriptions: string[];
}

export const workExperiences: WorkExperienceData[] = [
    {
        position: 'Software Engineer',
        company: 'Agoda',
        logoSrc: AgodaSrc,
        start: 'June 1, 2021',
        end: null,
        caption: 'Develop features and maintain flights reservation website and test stability.',
        bulletDescriptions: [
            "Maintaining frontend side projects which use TypeScript, React, and C# for the web server. Assisting on backend development using Scala.",
            "Ensuring system stability by maintaining integration and regression tests with the Selenium C# testing library together with WireMock for mocking the testing data.",
            "Maintaining the contact testing system, which helps ensure the contact compatibility between two services without introducing the dependency.",
            "Assisting on a visual regression test project. It aims to reduce visual UI bugs that count as more than 30% of the bugs, which the current framework cannot detect.",
            "Familiar with the CI/CD process in TeamCity, Github Actions, and Gitlab CI/CD, which help reduce repetitive manual processes and automate releasing and deployment operations.",
            "Familiar with A/B testing.",
        ],
    },
    {
        position: 'Software Engineer, Summer Student Program 2021',
        company: 'CERN',
        logoSrc: CERNSrc,
        start: 'July 1, 2021',
        end: 'August 31, 2021',
        caption: 'Developed a new feature-rich report database system with UX/UI improvement.',
        bulletDescriptions: [
            "Developed a new version of the validation report database system implemented with Python, Flask, TypeScript, React, and MongoDB, which improved the overall user experience and user interfaces, and introduced new essential features.",
            "Implemented a custom ORM for Python which takes advantage of the new native type hinting but still keeps a simple syntax for modeling and relation declaration.",
        ],
    },
    {
        position: 'Software Engineer, Internship & Part-Time',
        company: 'LINEMAN Wongnai',
        logoSrc: LMWNSrc,
        start: 'June 1, 2020',
        end: 'May 31, 2021',
        caption: 'Developed features and maintained ERP system and did system improvement migration.',
        bulletDescriptions: [
            "Maintained Wongnai’s ERP system, implemented with Python and the Odoo (Open ERP) library.",
            "Migrated Java Jasper report generating server out of the project to be a new service, which reduces the project’s memory usage by at least 500 MB per pod.",
            "Implemented an All Jobs Opening page in the career website project which is implemented with React and Next.js framework.",
        ],
    },
    {
        position: 'Software Engineer, Part-Time',
        company: 'Donut BKK',
        logoSrc: DonutSrc,
        start: 'October 1, 2019',
        end: 'May 31, 2020',
        caption: "Developed micro-services and implemented some pages on management website.",
        bulletDescriptions: [
            "Implemented couple of micro-services on the server side, which handles the user data using the Lumen framework.",
            "Made an influencer data scraper to see their engagement and prepare the data for analysis implemented with Python with BeautifulSoup and the Mechanize library for web scraping.",
        ],
    },
    {
        position: 'Full-stack Developer, Internship',
        company: 'Bank of Ayudhya (Krungsri)',
        logoSrc: KrungsriSrc,
        start: 'June 1, 2020',
        end: 'July 31, 2020',
        caption: "Implemented business logic on the service and researched the logging system.",
        bulletDescriptions: [
            "Satisfied the needs of customers by implementing a business logic into their API using the C# Asp.Net framework and PostgreSQL.",
            "Researched about the ELF stack, which introduces a new method for storing, filtering, and querying logs in the system.",
        ],
    },
]

export const getDuration = (start: string, end: string | null): string => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    var months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1;
    if (months < 12) {
        return `${months} Months`;
    } else {
        return `${(months/12).toFixed(1).replace(/\.0$/, '')} Year${months/12 == 1 ? '' : 's'}`;
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