import { mainContact } from "../data/contact";
import { reviews } from "../data/reviews";
import { serviceContents } from "../data/services";

export const Content = {
    Name: mainContact.name,

    Title: {
        Heading1: 'Make your',
        Heading1Gradient: 'ideas',
        Heading2: 'come alive',
        Heading3: 'with',
        Caption: 'I’m a full-package developer who’s ready to make your dream come true. Let’s set off on our journey together!',
    },

    Services: {
        Title: 'What can I do for you?',
        Subtitle: 'My experience fields are not limited as listed here. I love to explore new ideas and knowledge, which expands my development possibilities.',
        Data: serviceContents,
    },

    Showcases: {
        Title: 'Showcases',
        Subtitle: 'I proudly present my previous highlighted projects. Learn more about each project by clicking on it.',
    },

    Reviews: {
        Title: 'Reviews',
        Subtitle: 'Hear what other people say about me, from my lovely teammates, advisors, and clients. They are really amazing people.',
        Data: reviews,
    },

    About: {
        Title: 'About Me',
        Subtitle: 'Briefly introduction about my experience in the software development field. Check out my previously attended activities.',
        EducationHeading: 'Educations',
        WorkExperienceHeading: 'Work Experiences',
        ActivitiesHeading: 'Activities and Achievements',
    },

    Contact: {
        Title: 'Ready to ignite your dream?',
        Title2: 'Let\'s get in touch',
        Subtitle: 'We can have some casual small talk together. Feel free to reach out to me via any channel. I\'m Looking forward to hearing from you.',
        Contact: 'Contact',
        BasedIn: 'Based in',
        Social: 'Social',
    },

    Footer: {
        Description: 'My portfolio website tells a story about my experiences and projects. Made with TypeScript, React, and love. :)',
        Remark: `Design and develop by ${mainContact.name}`,
        Copyright: '© 2021, All Rights Reserved',
        SiteMap: 'Site Map',
    },

    Label: {
        Name: 'Name',
        NamePlaceholder: 'how can I call you?',
        Email: 'Email',
        EmailPlaceholder: 'example@email.com',
        Interests: 'Interests',
        InterestsPlaceHolder: 'select at least one interest',
        Message: 'Message',
        MessagePlaceholder: 'briefly explain your idea...'
    },

    Action: {
        ShowMore: 'More',
        ShowLess: 'Less',
        SendMessage: 'Send Message',
    },
}