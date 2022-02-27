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
        Caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    },

    Services: {
        Title: 'What can I do for you',
        Subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
        Data: serviceContents,
    },

    Showcases: {
        Title: 'Showcases',
        Subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    },

    Reviews: {
        Title: 'Reviews',
        Subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
        Data: reviews,
    },

    About: {
        Title: 'About Me',
        Subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
        EducationHeading: 'Educations',
        WorkExperienceHeading: 'Work Experiences',
        ActivitiesHeading: 'Activities and Achievements',
    },

    Contact: {
        Title: 'Ready to ignite your dream?',
        Title2: 'Let\'s get in touch',
        Contact: 'Contact',
        BasedIn: 'Based in',
        Social: 'Social',
        Subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
    },

    Footer: {
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium a mi et bibendum. Pellentesque ac.',
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