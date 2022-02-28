import React from "react"
import styled from "styled-components"
import { Box, Button, Card, Grid, Typography } from "../common"
import { allCategory, Category } from "../data/categories"
import { Icon } from "../styles/icons"
import { Style } from "../styles/style"
import { Collapse } from 'react-collapse'
import { Section } from "./Section"
import { ShowcaseData } from "../data/showcases"
import { OverlayBackground } from "./OverlayBackground"
import { ModalMinimizeButton } from "./ModalMinimizeButton"

interface Props {
    showcaseData: ShowcaseData;
}

const OverlayCard = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    pointer-events: none;
    max-height: calc(100% - (2 * ${Style.Spacing.L}));
`;

export const ShowcaseCard = (props: Props) => {
    const [isOpened, setIsOpened] = React.useState(false)
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false)
    const cardRef = React.useRef(null)
    const openCardRef = React.useRef(null)

    const showOverlayCard = () => {
        if (openCardRef && openCardRef.current && cardRef && cardRef.current) {
            document.body.style.overflow = 'hidden';
            const openCardElement = openCardRef.current as any;
            const cardElement = cardRef.current as any;
            openCardElement.style.top = `${cardElement.getBoundingClientRect().top}px`;
            openCardElement.style.left = `${cardElement.getBoundingClientRect().left}px`;
            openCardElement.style.width = `${cardElement.offsetWidth}px`
            openCardElement.style.minHeight = `${cardElement.offsetHeight}px`
            openCardElement.style.display = 'flex';
            openCardElement.style.transition = 'all 1s';
            openCardElement.style.zIndex = 0;
            cardElement.style.opacity = '0';
            setTimeout(() => {
                openCardElement.style.top = Style.Spacing.L;
                openCardElement.style.left = '0px';
                openCardElement.style.width = '100%';
                openCardElement.style.zIndex = 9999;
                setIsOpened(true)
            }, 20);
        }
    }

    const hideOverlayCard = () => {
        if (openCardRef && openCardRef.current && cardRef && cardRef.current) {
            const openCardElement = openCardRef.current as any;
            const cardElement = cardRef.current as any;
            console.log({
                elTop: cardElement.getBoundingClientRect().top,
            })
            openCardElement.style.top = `${cardElement.getBoundingClientRect().top}px`;
            openCardElement.style.left = `${cardElement.getBoundingClientRect().left}px`;
            openCardElement.style.width = `${cardElement.offsetWidth}px`
            openCardElement.style.minHeight = `${cardElement.offsetHeight}px`
            openCardElement.style.display = 'flex';
            openCardElement.style.zIndex = 0;
            setTimeout(() => {
                cardElement.style.opacity = '1';
                document.body.style.overflow = 'unset';
                openCardElement.style.display = 'none';
                setIsOverlayVisible(false)
            }, 1000);
        }
    }

    const handleToggleOpen = React.useCallback(() => {
        console.log('cccclick')
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
    }, [isOverlayVisible])

    React.useEffect(() => {
        if (!isOpened) {
            hideOverlayCard();
        }
    }, [isOpened])

    const renderCategories = () => (
        <Grid inline marginTop={Style.Spacing.XS} gap={Style.Spacing.S}>
            {props.showcaseData.categories.map(value =>
                <Button small icon={allCategory[value].icon} backgroundColor={allCategory[value].color}>{allCategory[value].name}</Button>
            )}
        </Grid>
    );

    const renderCaption = () => (
        <Typography block variant="body2" marginTop={Style.Spacing.L}>{props.showcaseData.caption}</Typography>
    );

    return (
        <React.Fragment>
            <div ref={cardRef}>
                <Card imageUrl={props.showcaseData.imageUrl} onClick={handleToggleOpen} interactive>
                    <Typography block variant="heading3">{props.showcaseData.title}</Typography>
                    {renderCategories()}
                    {renderCaption()}
                </Card>
            </div>
            {isOverlayVisible && <OverlayBackground isOpened={isOpened} onClick={handleToggleOpen} />}
            {isOverlayVisible && <OverlayCard ref={openCardRef}>
                <Card overflowScroll imageUrl={props.showcaseData.imageUrl} withImagePadding={isOpened} imageHeight={isOpened ? '520px' : undefined} maxWidth={Style.Css.MaxContainerWidth}>
                    <Typography block variant={isOpened ? 'heading2' : 'heading3'}>{props.showcaseData.title}</Typography>
                    {renderCategories()}
                    {renderCaption()}
                    <Collapse isOpened={isOpened}>
                        <Grid flowRow marginTop={Style.Spacing.XL} gap={Style.Spacing.L}>
                            <Section title="About">
                                <Typography>Hi</Typography>
                            </Section>
                            <Section title="Tech Stack">
                                <Typography>Hi</Typography>
                            </Section>
                            <Section title="Images">
                                <Typography>Hi</Typography>
                            </Section>
                        </Grid>
                    </Collapse>
                    <ModalMinimizeButton opened={isOpened} onClick={handleToggleOpen} />
                </Card>
            </OverlayCard>}
        </React.Fragment>
    )
}