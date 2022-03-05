import React from "react"
import { useSearchParams } from "react-router-dom";
import { Parameter } from "../constants/parameter";
import { NavigationContext } from "../contexts/navigation";
import { useOnScreen } from "./useOnScreen";

export const useNavigation = (ref: React.RefObject<HTMLDivElement>, path: string) => {
    const { routePath, setRoutePath, newRoutePath, setNewRoutePath } = React.useContext(NavigationContext);
    const isOnScreen = useOnScreen(ref)

    React.useEffect(() => {
        if (isOnScreen) {
            setRoutePath && setRoutePath(path)
        }
    }, [isOnScreen])

    React.useEffect(() => {
        if (newRoutePath !== '' && newRoutePath === path && ref.current) {
            window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 120 })
            if (setRoutePath && setNewRoutePath) {
                setRoutePath(newRoutePath)
                setNewRoutePath('')
            }
        }
    }, [newRoutePath])
}