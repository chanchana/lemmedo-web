import React from "react"
import { useSearchParams } from "react-router-dom";
import { Parameter } from "../constants/parameter";
import { NavigationContext } from "../contexts/navigation";
import { useOnScreen } from "./useOnScreen";

export const useNavigation = (ref: any, path?: string) => {
    const { setRoutePath } = React.useContext(NavigationContext);
    const [searchParams, setSearchParams] = useSearchParams()
    const isOnScreen = useOnScreen(ref)

    React.useEffect(() => {
        if (isOnScreen) {
            setRoutePath && setRoutePath(path ? path : Parameter.Navigation.Home.Path)
        }
    }, [isOnScreen])

    React.useEffect(() => {
        const route = searchParams.get(Parameter.RouteQueryStringKey)
        if (route === path || (!path)) {
            const element = (ref.current as any)
            window.scrollTo({ behavior: 'smooth', top: element.offsetTop - 120 })
        }
    }, [searchParams])
}