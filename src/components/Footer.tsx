import React from "react";
import { Box, Container, Grid, Typography } from "../common";
import { Content } from "../constants/content";
import { getNavigationList } from "../constants/parameter";
import { NavigationContext } from "../contexts/navigation";
import { ResponsiveContext } from "../contexts/responsive";
import { mainContact } from "../data/contact";
import { Style } from "../styles/style";

export const Footer = () => {
    const { setNewRoutePath } = React.useContext(NavigationContext)
    const { isMobile } = React.useContext(ResponsiveContext)

    const renderMainDetail = () => (
        <React.Fragment>
            <Typography block fullWidth variant="heading2" color={Style.Color.Light50}>{Content.Name}</Typography>
            <Typography block fullWidth marginTop={Style.Spacing.S} variant="body2" color={Style.Color.Light25}>{Content.Footer.Description}</Typography>
            <Typography block fullWidth marginTop={Style.Spacing.XL} variant="body2" color={Style.Color.Light25}>{Content.Footer.Remark}</Typography>
            <Typography block fullWidth variant="body2" color={Style.Color.Light25}>{Content.Footer.Copyright}</Typography>
        </React.Fragment>
    )
    const renderDesktop = () => (
        <Grid templateColumn="4fr 2fr 1fr">
            <Box maxWidth={460}>
                {renderMainDetail()}
            </Box>
            <Box>
                <Typography variant="heading3" color={Style.Color.Light50}>{Content.Contact.Contact}</Typography>
                <Typography block marginTop={Style.Spacing.S} variant="body2" color={Style.Color.Light25}>{mainContact.name}</Typography>
                <Typography block variant="body2" color={Style.Color.Light25}>{mainContact.location}</Typography>
                <Typography block variant="body2" color={Style.Color.Light25}>{mainContact.email}</Typography>
            </Box>
            <Box>
                <Typography variant="heading3" color={Style.Color.Light50}>{Content.Footer.SiteMap}</Typography>
                <Grid marginTop={Style.Spacing.S} flowRow>
                    {getNavigationList().map(({ name, path }, index) =>
                        <Typography key={`footer-nav-${index}`} interactive onClick={() => setNewRoutePath && setNewRoutePath(path)} variant="body2" color={Style.Color.Light25}>{name}</Typography>
                    )}
                </Grid>
            </Box>
        </Grid>
    )

    const renderMobile = () => (
        <Box textAlign="center">
            {renderMainDetail()}
            <Typography fullWidth block variant="body2" color={Style.Color.Light25}>{mainContact.email}</Typography>
        </Box>
    )

    return (
        <Box marginTop={Style.Spacing.XXXL} width="100%" background={Style.Color.Dark100}>
            <Container>
                <Box paddingTop={Style.Spacing.XXXL} paddingBottom={Style.Spacing.XXXL}>
                    {isMobile ? renderMobile() : renderDesktop()}
                </Box>
            </Container>
        </Box>
    )
}