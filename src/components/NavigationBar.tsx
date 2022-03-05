import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "../common"
import { Content } from "../constants/content";
import { getNavigationList } from "../constants/parameter"
import { NavigationContext } from "../contexts/navigation";
import { ResponsiveContext } from "../contexts/responsive";
import { Style } from "../styles/style"
import { Squash as Hamburger } from 'hamburger-react'
import { Collapse } from 'react-collapse'
import { OverlayBackground } from "./OverlayBackground";
import styled from "styled-components";

const scrollThreshold = 300;

const MobileNavigationItem = styled.div`
    height: 48px;
    ${Style.Typography.Desktop.Button1};
    line-height: 48px;
    cursor: pointer;
    color: ${Style.Color.Light100};
    &:hover, &:active {
        color: ${Style.Color.Purple};
    }
`

export const NavigationBar = () => {
    const [scrolled, setScrolled] = React.useState<boolean>(false);
    const { routePath, setNewRoutePath } = React.useContext(NavigationContext);
    const { isDesktop, isMobileOrTablet } = React.useContext(ResponsiveContext);
    const [isMobileOverlayVisible, setIsMobileOverlayVisible] = React.useState<boolean>(false);

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

    const handleToggleMobileOverlay = () => {
        setIsMobileOverlayVisible(!isMobileOverlayVisible)
    }

    const renderDesktopMenu = () => {
        return (isDesktop &&
            <Grid inline gap={Style.Spacing.M}>
                {getNavigationList().map(({ name, path }, index) =>
                    <Button
                        key={`nav-${index}`}
                        small
                        noFilled
                        {...getButtonStyle(path)}
                        onClick={() => setNewRoutePath && setNewRoutePath(path)}
                    >
                        {name}
                    </Button>
                )}
            </Grid>
        )
    }

    const renderMobileMenu = () => {
        return (isMobileOrTablet &&
            <Box marginRight={-15} maxWidth={scrolled ? '500px' : '0'} transform={scrolled ? 'scale(1)' : 'scale(0)'} overflow="hidden" transition="1s ease">
                <Hamburger toggled={isMobileOverlayVisible} toggle={handleToggleMobileOverlay} color={Style.Color.Light100} rounded size={18} />
            </Box>
        )
    }

    const handleMobileSetRoute = (path: string) => {
        if(setNewRoutePath) {
            setIsMobileOverlayVisible(false)
            setNewRoutePath(path)
        }
    }

    const renderMobileOverlay = () => {
        return (
            isMobileOrTablet && (
                <Collapse isOpened={isMobileOverlayVisible}>
                    <Container>
                        <Box marginBottom={Style.Spacing.XXL} marginTop={Style.Spacing.L} textAlign="center">
                            <Stack vertical gap={Style.Spacing.XS}>
                                {getNavigationList().map(({ name, path }, index) =>
                                    <MobileNavigationItem key={`mob-nav-${index}`} onClick={() => handleMobileSetRoute(path)}>{name}</MobileNavigationItem>
                                )}
                            </Stack>
                        </Box>
                    </Container>
                </Collapse>
            )
        )
    }

    const barMargin = isDesktop ? '28px 0' : '12px 0';
    const visibleBackgroundColor = isMobileOverlayVisible ? Style.Color.Dark50 : Style.Color.Dark75;
    const backgroundColor = (isMobileOrTablet && !scrolled) ? 'transparent' : visibleBackgroundColor;

    return (
        <React.Fragment>
            {isMobileOrTablet && <OverlayBackground isOpened={isMobileOverlayVisible} onClick={() => isMobileOverlayVisible && setIsMobileOverlayVisible(false)} />}
            <Box position="fixed" width="100%" left={0} top={0} background={backgroundColor} transition="0.5s ease" zIndex={1000}>
                <Container>
                    <Box margin={barMargin} display="flex" alignItems="center">
                        <Box maxWidth={scrolled ? '500px' : '0'} transform={scrolled ? 'scale(1)' : 'scale(0)'} overflow="hidden" transition="0.5s ease">
                            <Typography variant="heading2" animatedGradient noWrap>{Content.Name}</Typography>
                        </Box>
                        <Box flexShrink={1} flexGrow={1} transition="0.5s"/>
                        <Box flexShrink={0}>
                            {renderDesktopMenu()}
                        </Box>
                        <Box flexShrink={1} flexGrow={scrolled ? 0 : 1} transition="0.5s ease"/>
                        {renderMobileMenu()}
                    </Box>
                </Container>
                {renderMobileOverlay()}
            </Box>
        </React.Fragment>
    )
}