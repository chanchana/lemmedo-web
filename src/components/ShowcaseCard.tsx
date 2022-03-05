import React from "react"
import styled from "styled-components"
import { Box, Button, Card, Grid, Stack, Typography } from "../common"
import { allCategory } from "../data/categories"
import { Style } from "../styles/style"
import { Collapse } from 'react-collapse'
import { Section } from "./Section"
import { ShowcaseData } from "../data/showcases"
import { OverlayBackground } from "./OverlayBackground"
import { ModalMinimizeButton } from "./ModalMinimizeButton"
import { ImagesCarousel } from "./ImagesCarousel"
import { PeopleDisplay } from "./PeopleDisplay"
import { Tags } from "./Tags"
import { ExternalLink } from "./ExternalLink"
import { ResponsiveContext } from "../contexts/responsive"

interface Props {
    showcaseData: ShowcaseData;
}

const OverlayCard = styled.div<{fullHeight: boolean}>`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    pointer-events: none;
    max-height: ${props => props.fullHeight ? '100%' : `calc(100% - (2 * ${Style.Spacing.L}))`};
`;

export const ShowcaseCard = (props: Props) => {
    const { isMobile } = React.useContext(ResponsiveContext)
    const [isOpened, setIsOpened] = React.useState(false)
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement>(null)
    const openCardRef = React.useRef<HTMLDivElement>(null)

    const cardImageHeight = isMobile ? '240px' : '320px';
    const openedCardImageHeight = isMobile ? '240px' : '520px';

    const showOverlayCard = React.useCallback(() => {
        if (openCardRef?.current && cardRef?.current) {
            document.body.style.overflow = 'hidden';
            const openCardElement = openCardRef.current;
            const cardElement = cardRef.current;
            openCardElement.style.top = `${cardElement.getBoundingClientRect().top}px`;
            openCardElement.style.left = `${cardElement.getBoundingClientRect().left}px`;
            openCardElement.style.width = `${cardElement.offsetWidth}px`
            openCardElement.style.minHeight = `${cardElement.offsetHeight}px`
            openCardElement.style.display = 'flex';
            openCardElement.style.transition = 'all 1s';
            openCardElement.style.zIndex = '0';
            cardElement.style.opacity = '0';
            setTimeout(() => {
                openCardElement.style.top = isMobile ? '0' : Style.Spacing.L;
                openCardElement.style.left = '0px';
                openCardElement.style.width = '100%';
                openCardElement.style.zIndex = '9999';
                setIsOpened(true)
            }, 20);
        }
    }, [isMobile])

    const hideOverlayCard = () => {
        if (openCardRef?.current && cardRef?.current) {
            const openCardElement = openCardRef.current;
            const cardElement = cardRef.current;
            openCardElement.style.top = `${cardElement.getBoundingClientRect().top}px`;
            openCardElement.style.left = `${cardElement.getBoundingClientRect().left}px`;
            openCardElement.style.width = `${cardElement.offsetWidth}px`
            openCardElement.style.minHeight = `${cardElement.offsetHeight}px`
            openCardElement.style.display = 'flex';
            openCardElement.style.zIndex = '0';
            setTimeout(() => {
                cardElement.style.opacity = '1';
                document.body.style.overflow = 'unset';
                openCardElement.style.display = 'none';
                setIsOverlayVisible(false)
            }, 1000);
        }
    }

    const handleToggleOpen = React.useCallback(() => {
        if (!isOverlayVisible) {
            setIsOverlayVisible(true);
        } else {
            setIsOpened(false)
        }
    }, [isOverlayVisible]);

    React.useEffect(() => {
        if (isOverlayVisible) {
            showOverlayCard();
        }
    }, [isOverlayVisible, showOverlayCard])

    React.useEffect(() => {
        if (!isOpened) {
            hideOverlayCard();
        }
    }, [isOpened])

    const renderCategories = () => (
        <Grid inline marginTop={Style.Spacing.XS} gap={Style.Spacing.S}>
            {props.showcaseData.categories.map((value, index) =>
                <Button key={`category-${index}`} small icon={allCategory[value].icon} backgroundColor={allCategory[value].color}>{allCategory[value].name}</Button>
            )}
        </Grid>
    );

    const renderCaption = () => (
        <Typography block variant="body2" marginTop={Style.Spacing.L}>{props.showcaseData.caption}</Typography>
    );

    const renderDetailDescription = () => (
        <Stack vertical gap={Style.Spacing.L}>
            {props.showcaseData.details && <Section title="Description">
                <Stack vertical gap={Style.Spacing.S}>
                    {props.showcaseData.details.map((detail, index) => (
                        <Typography key={`detail-p-${index}`} variant="body2">{detail}</Typography>
                    ))}
                </Stack>
            </Section>}
            {props.showcaseData.tools && <Section title="Tools">
                <Tags tags={props.showcaseData.tools} />
            </Section>}
            {props.showcaseData.images && <Section title="Images">
                <Box>
                    <ImagesCarousel images={props.showcaseData.images} />
                </Box>
            </Section>}
        </Stack>
    )

    const renderDetailSideDescription = () => (
        <Stack vertical gap={Style.Spacing.L}>
            {props.showcaseData.contributors && <Section title="Contributors">
                <Stack vertical gap={Style.Spacing.S}>
                    {props.showcaseData.contributors.map((contributor, index) => (
                        <PeopleDisplay key={`people-${index}`} titleVariant="body1" people={contributor.people} label={contributor.responsibility} />
                    ))}
                </Stack>
            </Section>}
            <Section title="Date">
                <Typography>{props.showcaseData.date}</Typography>
            </Section>
            {props.showcaseData.externalLinks && <Section title="External Links">
                <Stack vertical gap={Style.Spacing.S}>
                    {props.showcaseData.externalLinks.map((externalLink, index) => (
                        <ExternalLink key={`ext-link-${index}`} text={externalLink.label || externalLink.url} url={externalLink.url} />
                    ))}
                </Stack>
            </Section>}
        </Stack>
    )

    const renderDetailDesktop = () => (
        <Grid templateColumn="70% 1fr" marginTop={Style.Spacing.XXL} gap={Style.Spacing.XL}>
            {renderDetailDescription()}
            {renderDetailSideDescription()}
        </Grid>
    )

    const renderDetailMobile = () => (
        <Stack vertical gap={Style.Spacing.XL} marginTop={Style.Spacing.XXL}>
            {renderDetailDescription()}
            {renderDetailSideDescription()}
        </Stack>
    )

    return (
        <React.Fragment>
            <div ref={cardRef}>
                <Card imageUrl={props.showcaseData.imageUrl} onClick={handleToggleOpen} interactive imageHeight={cardImageHeight}>
                    <Typography block variant="heading3">{props.showcaseData.title}</Typography>
                    {renderCategories()}
                    {renderCaption()}
                </Card>
            </div>
            {isOverlayVisible && <OverlayBackground isOpened={isOpened} onClick={handleToggleOpen} />}
            {isOverlayVisible && <OverlayCard ref={openCardRef} fullHeight={isMobile}>
                <Card overflowScroll imageUrl={props.showcaseData.imageUrl} withImagePadding={isOpened} imageHeight={isOpened ? openedCardImageHeight : cardImageHeight} maxWidth={Style.Css.MaxContainerWidth}>
                    <Typography block variant={isOpened ? 'heading2' : 'heading3'}>{props.showcaseData.title}</Typography>
                    {renderCategories()}
                    {renderCaption()}
                    <Collapse isOpened={isOpened}>
                        {isMobile && renderDetailMobile()}
                        {!isMobile && renderDetailDesktop()}
                    </Collapse>
                    <ModalMinimizeButton opened={isOpened} onClick={handleToggleOpen} isMobile={isMobile} />
                </Card>
            </OverlayCard>}
        </React.Fragment>
    )
}