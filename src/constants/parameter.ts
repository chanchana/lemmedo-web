export const Parameter = {
    ShowcasesInitialVisibleCount: 6,

    Navigation: {
        Home: {
            Name: 'Home',
            Path: 'home',
        },
        Services: {
            Name: 'Services',
            Path: 'services',
        },
        Showcases: {
            Name: 'Showcases',
            Path: 'showcases',
        },
        Reviews: {
            Name: 'Reviews',
            Path: 'reviews',
        },
        About: {
            Name: 'About',
            Path: 'about',
        },
        Contact: {
            Name: 'Contact',
            Path: 'contact',
        },
    },

    Breakpoint: {
        MaxMobile: 449,
        MaxTablet: 999,
    },
};

export const getNavigationList = (): { name: string, path: string }[] => {
    return Object.entries(Parameter.Navigation).map(([, value]) => ({ name: value.Name, path: value.Path }) as { name: string, path: string });
}