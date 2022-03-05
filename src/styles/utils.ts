import { css } from "styled-components";
import { Parameter } from "../constants/parameter";
import { Style } from "./style";

export const MediaQuery = {
    Mobile: `@media (max-width: ${Parameter.Breakpoint.MaxMobile}px)`,
    Tablet: `@media (min-width: ${Parameter.Breakpoint.MaxMobile + 1}px) and (max-width: ${Parameter.Breakpoint.MaxTablet}px)`,
    Desktop: `@media (min-width: ${Parameter.Breakpoint.MaxTablet + 1}px)`,
    MobileOrTablet: `@media (max-width: ${Parameter.Breakpoint.MaxTablet}px)`,
    DesktopOrTablet: `@media (min-width: ${Parameter.Breakpoint.MaxMobile + 1}px)`,
};

export const getTextGradient = (gradient: string) => `
background: ${gradient};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const textAnimatedGradient = `
background: linear-gradient(-45deg,
    ${Style.Color.Green}, ${Style.Color.Cyan}, ${Style.Color.Yellow}, ${Style.Color.Orange}, ${Style.Color.Red}, ${Style.Color.Purple}
);
background-size: 600% 100%;
animation: ${css`gradientKeyframe 5s ease infinite`};
animation-direction: alternate;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;