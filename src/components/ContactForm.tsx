import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Box, Button, Card, Stack, TextArea, TextField } from "../common"
import { Content } from "../constants/content"
import { interestMessageService } from "../services/interestMessage";
import { Icon } from "../styles/icons";
import { Style } from "../styles/style"
import { OverlayBackground } from "./OverlayBackground";

interface FormProps {
    full_name: string;
    email: string;
    message: string;
}

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validateForm = (data: FormProps) => {
    const emptyFields = []
    if (!data.full_name) emptyFields.push(Content.Label.Name)
    if (!data.email) emptyFields.push(Content.Label.Email)
    if (!data.message) emptyFields.push(Content.Label.Message)

    if (emptyFields.length !== 0) {
        throw Error(`${Content.Error.RequiredField}${emptyFields.join(', ')}`)
    }

    if (!emailPattern.test(data.email)) {
        throw Error(Content.Error.EmailValidation)
    }
}

const SpinDiv = styled.div`
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
`

export const ContactForm = () => {
    const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
    const { register, handleSubmit, reset } = useForm<FormProps>();
    const onSubmit = (data: FormProps) => {
        setIsProcessing(true)
        try {
            validateForm(data)
            interestMessageService.send(data).then(response => {
                if (response.status) {
                    alert(Content.Action.SendCompleteMessage);
                    reset()
                } else {
                    alert(Content.Error.InternalError);
                }
            }).catch(error => {
                if (error) {
                    alert(error)
                }
            }).finally(() => {
                setIsProcessing(false)
            })
        } catch (error) {
            alert(error)
            setIsProcessing(false)
        }
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack vertical gap={Style.Spacing.L}>
                    <TextField name="full_name" register={register} label={Content.Label.Name} placeholder={Content.Label.NamePlaceholder}/>
                    <TextField name="email" register={register} label={Content.Label.Email} placeholder={Content.Label.EmailPlaceholder}/>
                    <TextArea name="message" register={register} label={Content.Label.Message} placeholder={Content.Label.MessagePlaceholder}/>
                    <Button type="submit" large backgroundColor={Style.Gradient.GreenToCyan}>{Content.Action.SendMessage}</Button>
                </Stack>
            </form>
            <OverlayBackground isOpened={isProcessing} />
            {isProcessing &&
                <Box center width="100%" height="100%" position="fixed" top={0} left={0} zIndex="99999">
                    <Card>
                        <Box padding={`${Style.Spacing.XL} ${Style.Spacing.XXL}`} fontSize={Style.Spacing.XXL} color={Style.Color.Light100}>
                            <SpinDiv>
                                <Box center width={Style.Spacing.XXL} height={Style.Spacing.XXL}>
                                    {Icon.CircleNotch}
                                </Box>
                            </SpinDiv>
                        </Box>
                    </Card>
                </Box>
            }
        </React.Fragment>
    )
}