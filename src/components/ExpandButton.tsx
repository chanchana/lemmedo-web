import React from "react";
import { Button } from "../common"
import { Content } from "../constants/content";
import { Icon } from "../styles/icons";

interface Props {
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExpandButton = (props: Props) => {
    const buttonIcon = React.useMemo(() => props.isExpanded ? Icon.ChevronUp : Icon.ChevronDown, [props.isExpanded]);
    const buttonLabel = React.useMemo(() => props.isExpanded ? Content.Action.ShowLess : Content.Action.ShowMore, [props.isExpanded]);
    const handleClick = () => props.setIsExpanded(!props.isExpanded);
    
    return (
        <Button onClick={handleClick} icon={buttonIcon}>{buttonLabel}</Button>
    )
}