import React from "react";
import { Box, Button, Container, Grid, Typography } from "../common"
import { Content } from "../constants/content";
import { getNavigationList } from "../constants/parameter"
import { NavigationContext } from "../contexts/navigation";
import { Style } from "../styles/style"

const scrollThreshold = 300;

export const NavigationBar = () => {
    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const { routePath, setRoute } = React.useContext(NavigationContext);

    const handleScroll = () => {
        if (window.pageYOffset > scrollThreshold) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    React.useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const getButtonStyle = (path: string) => {
        const selectedStyle = {
            backgroundColor: Style.Color.Dark100,
            color: Style.Color.Light100,
        }
        const normalStyle = {
            backgroundColor: 'none',
            color: Style.Color.Light75,
        }
        if (routePath === path) return selectedStyle;
        return normalStyle;
    }

    return (
        <Box position="fixed" width="100%" left={0} top={0} background={Style.Color.Dark75} zIndex={99}>
            <Container>
                <Box margin="28px 0" display="flex">
                    <Box maxWidth={scrolled ? '500px' : '0'} transform={scrolled ? 'scale(1)' : 'scale(0)'} overflow="hidden" transition="1s ease">
                        <Typography variant="heading2" animatedGradient noWrap>{Content.Name}</Typography>
                    </Box>
                    <Box flexShrink={1} flexGrow={1} transition="1s"/>
                    <Box flexShrink={0}>
                        <Grid inline gap={Style.Spacing.M}>
                            {getNavigationList().map(({ name, path }, index) =>
                                <Button
                                    small
                                    noFilled
                                    {...getButtonStyle(path)}
                                    onClick={() => setRoute && setRoute(path)}
                                >
                                    {name}
                                </Button>
                            )}
                        </Grid>
                    </Box>
                    <Box flexShrink={1} flexGrow={scrolled ? 0 : 1} transition="1s ease"/>
                </Box>
            </Container>
        </Box>
    )
}