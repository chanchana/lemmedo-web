import { Box, Button, Typography } from "../common"
import { Content } from "../constants/content"
import { Style } from "../styles/style"
import PictureSrc from "../assets/picture.png"
import React from "react";
import { Parameter } from "../constants/parameter";
import { useNavigation } from "../hooks/useNavigation";
import { NavigationContext } from "../contexts/navigation";
import { ResponsiveContext } from "../contexts/responsive";

const desktopHeight = 710;
const mobileHeight = 620;

export const Title = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Home.Path)
    const { setNewRoutePath } = React.useContext(NavigationContext)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    const FadeOverlay = () => <Box width="100%" background={Style.Gradient.FadeBlackBottom} height={height} position="absolute" left={0} top={0} />;
    const Picture = () => (
        <Box position="absolute" bottom={0} right="-20px">
            <img src={PictureSrc} height={510} alt="Chanchana" />
        </Box>
    );
    const MobilePicture = () => (
        <Box position="absolute" center bottom={0} width="100%">
            <img src={PictureSrc} width="280px" alt="Chanchana" />
        </Box>
    );

    const handleClick = () => {
        if (setNewRoutePath) {
            setNewRoutePath(Parameter.Navigation.Contact.Path)
        }
    }
    const height = isMobile ? mobileHeight : desktopHeight
    return (
        <div ref={sectionRef}>
            <FadeOverlay />
            <Box height={height} position="relative">
                {!isMobile && <Picture />}
                {isMobile && <MobilePicture />}
                <Box width={isMobile ? undefined : 460} paddingTop={isMobile ? 80 : 230} textAlign={isMobile ? 'center' : undefined}>
                    <Box>
                        <Typography variant="heading1">{Content.Title.Heading1}&nbsp;</Typography>
                        <Typography variant="heading1" gradient={Style.Gradient.YellowToRed}>{Content.Title.Heading1Gradient}</Typography>
                    </Box>
                    <Typography variant="heading1">{Content.Title.Heading2}&nbsp;</Typography>
                    {isMobile && <Typography variant="heading1">{Content.Title.Heading3}&nbsp;</Typography>}
                    <Box>
                        {!isMobile && <Typography variant="heading1">{Content.Title.Heading3}&nbsp;</Typography>}
                        <Typography variant="heading1" animatedGradient>{Content.Name}</Typography>
                    </Box>
                    <Box center marginTop={Style.Spacing.S}>
                        <Box maxWidth={isMobile ? 260 : undefined}>
                            <Typography variant="caption">{Content.Title.Caption}</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={Style.Spacing.L}>
                        <Button onClick={handleClick} variant="large" backgroundColor={Style.Gradient.PurpleToPink}>Contact Me</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}