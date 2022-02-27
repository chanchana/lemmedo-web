import React, { useState } from 'react';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { Parameter } from '../constants/parameter';
import { useRoute } from '../hooks/useRoute';

interface INavigationContext {
    routePath: string;
    setRoute?: (newRoute: string | undefined) => void;
    setRoutePath?: Dispatch<SetStateAction<string>>;
}
  
const defaultNavigation: INavigationContext = {
    routePath: Parameter.Navigation.Home.Path,
};

export const NavigationContext = React.createContext<INavigationContext>(defaultNavigation);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
	const [routePath, setRoutePath] = useState<string>(defaultNavigation.routePath);
    const [route, setRoute] = useRoute()

	const providerValue = {
		routePath,
		setRoute,
        setRoutePath,
	};

	return (
		<NavigationContext.Provider value={providerValue}>{children}</NavigationContext.Provider>
	);
};