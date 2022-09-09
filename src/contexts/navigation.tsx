import React, { useState } from 'react';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { Parameter } from '../constants/parameter';

interface INavigationContext {
    routePath: string;
    setRoutePath?: Dispatch<SetStateAction<string>>;
	newRoutePath: string;
    setNewRoutePath?: Dispatch<SetStateAction<string>>;
}
  
const defaultNavigation: INavigationContext = {
    routePath: Parameter.Navigation.Showcases.Path,
	newRoutePath: '',
};

export const NavigationContext = React.createContext<INavigationContext>(defaultNavigation);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
	const [routePath, setRoutePath] = useState<string>(defaultNavigation.routePath);
	const [newRoutePath, setNewRoutePath] = useState<string>(defaultNavigation.routePath);

	const providerValue = {
		routePath,
        setRoutePath,
		newRoutePath,
		setNewRoutePath,
	};

	return (
		<NavigationContext.Provider value={providerValue}>{children}</NavigationContext.Provider>
	);
};