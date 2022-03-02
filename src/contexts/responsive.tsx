import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

interface IResponsiveContext {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isMobileOrTablet: boolean;
	isTabletOrDesktop: boolean;
}
  
const defaultResponsive: IResponsiveContext = {
    isMobile: false,
	isTablet: false,
	isDesktop: false,
	isMobileOrTablet: false,
	isTabletOrDesktop: false,
};

export const ResponsiveContext = React.createContext<IResponsiveContext>(defaultResponsive);

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
	const responsiveValue = useResponsive()

	return (
		<ResponsiveContext.Provider value={responsiveValue}>{children}</ResponsiveContext.Provider>
	);
};