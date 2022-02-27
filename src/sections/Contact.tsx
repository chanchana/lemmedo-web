import React from "react"
import { Box, Button, Card, Grid, Link, TextArea, TextField, Typography } from "../common"
import { ContactForm } from "../components/ContactForm"
import { ContactLink } from "../components/ContactLink"
import { Section } from "../components/Section"
import { SectionHeading } from "../components/SectionHeader"
import { ServiceCard } from "../components/ServiceCard"
import { SocialContactLink } from "../components/SocialContactLink"
import { Content } from "../constants/content"
import { contacts, locationContact, socialContacts } from "../data/contact"
import { Style } from "../styles/style"

export const Contact = () => {
    return (
        <React.Fragment>
            <SectionHeading largeTitle title={Content.Contact.Title} title2={Content.Contact.Title2} subtitle={Content.Services.Subtitle} />
            <Grid columns={2} gap={Style.Spacing.L}>
                <Card heightFitContent>
                    <ContactForm />
                </Card>
                <Card heightFitContent>
                    <Grid flowRow gap={Style.Spacing.XL}>
                        <Section title={Content.Contact.Contact}>
                            <Grid flowRow gap={Style.Spacing.S}>
                                {contacts.map(contactData => <ContactLink contactData={contactData} />)}
                            </Grid>
                        </Section>
                        <Section title={Content.Contact.BasedIn}>
                            <Typography variant="body1">{locationContact}</Typography>
                        </Section>
                        <Box>
                            <Section title={Content.Contact.Social} />
                            <Grid inline gap={Style.Spacing.S}>
                                {socialContacts.map(contactData => <SocialContactLink contactData={contactData} />)}
                            </Grid>
                        </Box>
                    </Grid>
                </Card>
            </Grid>
        </React.Fragment>
    )
}