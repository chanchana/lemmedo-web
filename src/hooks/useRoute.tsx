import React from "react";
import { useSearchParams } from "react-router-dom";
import { Parameter } from "../constants/parameter";
import { NavigationContext } from "../contexts/navigation";

export const useRoute = (): [string | null, (newRoute: string | undefined) => void] => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { setRoutePath } = React.useContext(NavigationContext)

    const setRoute = (newRoute: string | undefined, redirect?: boolean) => {
        if (!newRoute || newRoute === Parameter.Navigation.Home.Path) {
            setSearchParams({}, { replace: !redirect })
            if (setRoutePath) setRoutePath(Parameter.Navigation.Home.Path);
        } else {
            setSearchParams({ [Parameter.RouteQueryStringKey]: newRoute }, { replace: !redirect })
            if (setRoutePath) setRoutePath(newRoute);
        }
    }
    const route = searchParams.get(Parameter.RouteQueryStringKey)

    return [route, setRoute];
}