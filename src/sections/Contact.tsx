import React from "react"
import { Card, Grid, Stack, Typography } from "../common"
import { ContactForm } from "../components/ContactForm"
import { ContactLink } from "../components/ContactLink"
import { Section } from "../components/Section"
import { SectionHeading } from "../components/SectionHeader"
import { SocialContactLink } from "../components/SocialContactLink"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { ResponsiveContext } from "../contexts/responsive"
import { contacts, locationContact, socialContacts } from "../data/contact"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const Contact = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.Contact.Path)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    return (
        <div ref={sectionRef}>
            <SectionHeading largeTitle title={Content.Contact.Title} title2={Content.Contact.Title2} subtitle={Content.Services.Subtitle} />
            <Grid columns={isMobile ? 1 : 2} gap={Style.Spacing.L}>
                <Card heightFitContent>
                    <ContactForm />
                </Card>
                <Card heightFitContent>
                    <Stack vertical gap={Style.Spacing.XL}>
                        <Section title={Content.Contact.Contact}>
                            <Stack vertical gap={Style.Spacing.S}>
                                {contacts.map((contactData, index) => <ContactLink key={`contact-${index}`} contactData={contactData} />)}
                            </Stack>
                        </Section>
                        <Section title={Content.Contact.BasedIn}>
                            <Typography variant="body1">{locationContact}</Typography>
                        </Section>
                        <Section title={Content.Contact.Social}>
                            <Stack horizontal gap={Style.Spacing.S}>
                                {socialContacts.map((contactData, index) => <SocialContactLink key={`social-contact-${index}`} contactData={contactData} />)}
                            </Stack>
                        </Section>
                    </Stack>
                </Card>
            </Grid>
        </div>
    )
}