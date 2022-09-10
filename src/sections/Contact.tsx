import React from "react"
import { Box, Card, Grid, Stack, Typography } from "../common"
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
            {/* <SectionHeading largeTitle title={Content.Contact.Title} title2={Content.Contact.Title2} subtitle={Content.Contact.Subtitle} /> */}
            {/* <Grid columns={isMobile ? 1 : 2} gap={Style.Spacing.L}> */}
                {/* <Card heightFitContent>
                    <ContactForm />
                </Card> */}
                <Box center width="100%">
                    <Card width="100%" maxWidth="400px">
                        {/* <Box textAlign="center"> */}
                            <Stack vertical gap={Style.Spacing.XL}>
                                <Section title={Content.Contact.Contact}>
                                    <Stack vertical gap={Style.Spacing.S}>
                                        {contacts.map((contactData, index) => <ContactLink key={`contact-${index}`} contactData={contactData} />)}
                                    </Stack>
                                </Section>
                                <Section title={Content.Contact.BasedIn}>
                                    <Typography variant="body1">{locationContact}</Typography>
                                </Section>
                                <div className="fb-page" data-href="https://www.facebook.com/lemmedoit.studio/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/lemmedoit.studio/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lemmedoit.studio/">lemmedo.it</a></blockquote></div>
                                {/* <Section title={Content.Contact.Social}>
                                    <Stack horizontal gap={Style.Spacing.S}>
                                        {socialContacts.map((contactData, index) => <SocialContactLink key={`social-contact-${index}`} contactData={contactData} />)}
                                    </Stack>
                                </Section> */}
                            </Stack>
                        {/* </Box> */}
                    </Card>

                </Box>
            {/* </Grid> */}
        </div>
    )
}