import React, { createRef, useRef } from "react";
import styled from "styled-components";
import { OverflowBox, Box, Grid, Tooltip, Card, Container, Button, Typography } from "../common";
import { Image } from "../data/image";
import { Style } from "../styles/style";
import { OverlayBackground } from "./OverlayBackground";
import { Icon } from "../styles/icons";
import { ModalMinimizeButton } from "./ModalMinimizeButton";
import { Collapse } from 'react-collapse'

interface Props {
    images: Image[];
}

const thumbnailSize = "136px"
const thumbnailRadius = "6px"

const ThumbnailImage = styled.img`
    width: ${thumbnailSize};
    height: ${thumbnailSize};
    border-radius: ${thumbnailRadius};
    object-fit: cover;
    transition: box-shadow ease 0.5s;

    &:hover {
        cursor: pointer;
        box-shadow: ${Style.Css.HoverOutlineBoxShadow}, ${Style.Css.BoxShadow.M};
    }
`

const Overlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`

const ModalCardImage = styled.img<{ opened: boolean }>`
    width: ${props => props.opened ? '100%' : thumbnailSize};
    height: ${props => props.opened ? `min(56vw, ${Style.Css.MaxImageHeight})` : thumbnailSize};
    object-fit: cover;
    transition: all ease 0.5s;
    border-radius: 6px;
`

export const ImagesCarousel = (props: Props) => {
    const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [openedRef, setOpenedRef] = React.useState<React.RefObject<HTMLImageElement>>()
    const [thumbnailRefs, setThumbnailRefs] = React.useState<React.RefObject<HTMLImageElement>[]>([])
    const modalRef = React.useRef<HTMLDivElement>(null)
    const modalPreviousVisible = React.useMemo(() => currentIndex !== 0, [currentIndex])
    const modalNextVisible = React.useMemo(() => currentIndex < props.images.length - 1, [currentIndex, props.images.length])

    React.useEffect(() => {
        setThumbnailRefs((thumbnailRefs) =>
            props.images.map((_, index) => thumbnailRefs[index] || React.createRef())
        );
    }, [])

    const handleOpenModal = (currentIndex: number) => {
        const ref = thumbnailRefs[currentIndex]
        if (ref?.current && modalRef?.current) {
            setOpenedRef(ref)
            setCurrentIndex(currentIndex)
            const modalElement = modalRef.current
            const imageElement = ref.current
            modalElement.style.top = `${imageElement.getBoundingClientRect().top}px`
            modalElement.style.left = `${imageElement.getBoundingClientRect().left}px`
            modalElement.style.width = `${imageElement.offsetWidth}px`
            modalElement.style.height = `${imageElement.offsetHeight}px`
            modalElement.style.display = 'flex';
            modalElement.style.transition = 'all ease 1s';
            modalElement.style.zIndex = '0';
            imageElement.style.opacity = '0';
            setTimeout(() => {
                modalElement.style.top = '0';
                modalElement.style.left = '0';
                modalElement.style.width = '100%';
                modalElement.style.height = '100%';
                modalElement.style.zIndex = '9999';
                setIsModalOpened(true)
            }, 20);
        }
    }

    const handleCloseModal = () => {
        const originalRef = openedRef
        const currentRef = thumbnailRefs[currentIndex]
        if (currentRef?.current && originalRef?.current && modalRef?.current) {
            const modalElement = modalRef.current
            const currentImageElement = currentRef.current
            const originalImageElement = originalRef.current
            modalElement.style.top = `${currentImageElement.getBoundingClientRect().top}px`
            modalElement.style.left = `${currentImageElement.getBoundingClientRect().left}px`
            modalElement.style.width = `${currentImageElement.offsetWidth}px`
            modalElement.style.height = `${currentImageElement.offsetHeight}px`
            modalElement.style.display = 'flex';
            modalElement.style.transition = 'all ease 1s';
            modalElement.style.zIndex = '0';
            originalImageElement.style.opacity = '1';
            currentImageElement.style.opacity = '0';
            setIsModalOpened(false)
            setTimeout(() => {
                setCurrentIndex(0)
                currentImageElement.style.opacity = '1';
                modalElement.style.display = 'none';
                modalElement.style.transition = 'none';
            }, 1000);
        }
    }

    const handleChangeIndex = (newIndex: number) => {
        if (newIndex < 0 || newIndex >= props.images.length) return;
        const newThumbnailElement = thumbnailRefs[newIndex].current
        if (openedRef?.current && newThumbnailElement) {
            newThumbnailElement.style.opacity = '0';
            openedRef.current.style.opacity = '1';
            setCurrentIndex(newIndex)
            setOpenedRef(thumbnailRefs[newIndex])
        }
    }

    return (
        <React.Fragment>
            <OverflowBox>
                <Box margin={Style.Spacing.S}>
                    <Grid gap={Style.Spacing.S}>
                        {props.images.map((image, index) => (
                            <ThumbnailImage ref={thumbnailRefs[index]} onClick={() => handleOpenModal(index)} src={image.imageUrl} />
                        ))}
                    </Grid>
                </Box>
            </OverflowBox>
            <OverlayBackground isOpened={isModalOpened} onClick={handleCloseModal} />
            <Overlay ref={modalRef}>
                <Card padding={isModalOpened ? Style.Spacing.L : 'none'} width="100%" maxWidth={Style.Css.MaxContainerWidth}>
                    <Box center position="relative">
                        <ModalCardImage src={props.images[currentIndex].imageUrl} opened={isModalOpened} />
                        <Box transition="all ease 0.3s" opacity={isModalOpened ? 1 : 0} position="absolute" width={`calc(100% - (2 * ${Style.Spacing.L}))`} display="flex" justifyContent="space-between" padding={Style.Spacing.L}>
                            <Box>
                                {modalPreviousVisible && <Button noShadow noFilled backgroundColor="#00000060" onClick={() => handleChangeIndex(currentIndex - 1)} icon={Icon.ChevronLeft} />}
                            </Box>
                            <Box>
                                {modalNextVisible && <Button noShadow noFilled backgroundColor="#00000060" onClick={() => handleChangeIndex(currentIndex + 1)} icon={Icon.ChevronRight} />}
                            </Box>
                        </Box>
                    </Box>
                    <Collapse isOpened={isModalOpened}>
                        <Box center marginTop={Style.Spacing.L}>
                            <Typography variant="body1">
                                {props.images[currentIndex].label}
                                {props.images[currentIndex].year && ` - ${props.images[currentIndex].year}`}
                            </Typography>
                        </Box>
                    </Collapse>
                    <ModalMinimizeButton opened={isModalOpened} onClick={handleCloseModal}/>
                </Card>
            </Overlay>
        </React.Fragment>
    )
}