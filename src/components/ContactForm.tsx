import { Button, Grid, TextArea, TextField } from "../common"
import { Content } from "../constants/content"
import { Style } from "../styles/style"

export const ContactForm = () => {
    return (
        <form>
            <Grid flowRow gap={Style.Spacing.L}>
                <TextField label={Content.Label.Name} placeholder={Content.Label.NamePlaceholder}/>
                <TextField label={Content.Label.Email} placeholder={Content.Label.EmailPlaceholder}/>
                <TextArea label={Content.Label.Message} placeholder={Content.Label.MessagePlaceholder}/>
                <Button large backgroundColor={Style.Gradient.GreenToCyan}>{Content.Action.SendMessage}</Button>
            </Grid>
        </form>
    )
}