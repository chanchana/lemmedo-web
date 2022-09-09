export const Parameter = {
    ShowcasesInitialVisibleCount: 6,
    RouteQueryStringKey: 'route',

    Navigation: {
        Showcases: {
            Name: 'Gallery',
            Path: 'gallery',
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
        MaxMobile: 864,
        MaxTablet: 1000,
    },
};

export const getNavigationList = (): { name: string, path: string }[] => {
    return Object.entries(Parameter.Navigation).map(([, value]) => ({ name: value.Name, path: value.Path }) as { name: string, path: string });
}