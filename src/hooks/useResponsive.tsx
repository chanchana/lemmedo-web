import React from 'react';
import { Parameter } from '../constants/parameter';

export const useResponsive = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isTablet, setIsTablet] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);

    const [isMobileOrTablet, setIsMobileOrTablet] = React.useState(false);
    const [isTabletOrDesktop, setIsTabletOrDesktop] = React.useState(false);

    const getWidth = () => window.innerWidth;

    const setResponsive = () => {
        const width = getWidth();
        let mobile = false;
        let tablet = false;
        let desktop = false;
        if (width <= Parameter.Breakpoint.MaxMobile) {
            mobile = true;
        } else if (width <= Parameter.Breakpoint.MaxTablet) {
            tablet = true;
        } else {
            desktop = true;
        }
        setIsMobile(mobile);
        setIsTablet(tablet);
        setIsDesktop(desktop);
        setIsMobileOrTablet(mobile || tablet);
        setIsTabletOrDesktop(tablet || desktop);
    };

    React.useLayoutEffect(() => {
        setResponsive();
        window.addEventListener('resize', setResponsive);
        return () => window.removeEventListener('resize', setResponsive);
    }, []);

    return ({
        isMobile,
        isTablet,
        isDesktop,
        isMobileOrTablet,
        isTabletOrDesktop,
    })
}