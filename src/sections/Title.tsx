import { Box, Button, Typography } from "../common"
import { Content } from "../constants/content"
import { Style } from "../styles/style"
import PictureSrc from "../assets/picture.png"
import React from "react";
import { Parameter } from "../constants/parameter";
import { useNavigation } from "../hooks/useNavigation";
import { NavigationContext } from "../contexts/navigation";

const height = 710;

export const Title = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef)
    const { setRoute } = React.useContext(NavigationContext)
    
    const FadeOverlay = () => <Box width="100%" background={Style.Gradient.FadeBlackBottom} height={height} position="absolute" left={0} top={0} />;
    const Picture = () => (
        <Box position="absolute" bottom={0} right="-20px">
            <img src={PictureSrc} height={510} />
        </Box>
    );

    const handleClick = () => {
        if (setRoute) {
            setRoute(undefined)
            setTimeout(() => {
                setRoute(Parameter.Navigation.Contact.Path)
            }, 100)
        }
    }
    return (
        <div ref={sectionRef}>
            <FadeOverlay />
            <Box height={height} position="relative">
                <Picture />
                <Box width={460} paddingTop={230}>
                    <Box>
                        <Typography variant="heading1">{Content.Title.Heading1}&nbsp;</Typography>
                        <Typography variant="heading1" gradient={Style.Gradient.YellowToRed}>{Content.Title.Heading1Gradient}</Typography>
                    </Box>
                    <Typography variant="heading1">{Content.Title.Heading2}</Typography>
                    <Box>
                        <Typography variant="heading1">{Content.Title.Heading3}&nbsp;</Typography>
                        <Typography variant="heading1" animatedGradient>{Content.Name}</Typography>
                    </Box>
                    <Box marginTop={Style.Spacing.S}>
                        <Typography variant="caption">{Content.Title.Caption}</Typography>
                    </Box>
                    <Box marginTop={Style.Spacing.L}>
                        <Button onClick={handleClick} variant="large" backgroundColor={Style.Gradient.PurpleToPink}>Contact Me</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}