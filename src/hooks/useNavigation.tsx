import React from "react"
import { useSearchParams } from "react-router-dom";
import { Parameter } from "../constants/parameter";
import { NavigationContext } from "../contexts/navigation";
import { ResponsiveContext } from "../contexts/responsive";
import { useOnScreen } from "./useOnScreen";

export const useNavigation = (ref: React.RefObject<HTMLDivElement>, path: string) => {
    const { routePath, setRoutePath, newRoutePath, setNewRoutePath } = React.useContext(NavigationContext);
    const { isMobile } = React.useContext(ResponsiveContext)
    const isOnScreen = useOnScreen(ref)
    
    const scrollOffset = isMobile ? -88 : -120

    React.useEffect(() => {
        if (isOnScreen) {
            setRoutePath && setRoutePath(path)
        }
    }, [isOnScreen])

    React.useEffect(() => {
        if (newRoutePath !== '' && newRoutePath === path && ref.current) {
            window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop + scrollOffset })
            if (setRoutePath && setNewRoutePath) {
                setRoutePath(newRoutePath)
                setNewRoutePath('')
            }
        }
    }, [newRoutePath])
}