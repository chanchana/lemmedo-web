import React from "react"
import { Container } from "../common"
import { Footer } from "../components/Footer"
import { NavigationBar } from "../components/NavigationBar"
import { About } from "../sections/About"
import { Contact } from "../sections/Contact"
import { Reviews } from "../sections/Reviews"
import { Services } from "../sections/Services"
import { Showcases } from "../sections/Showcases"
import { Title } from "../sections/Title"

export const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <NavigationBar />
                <Title />
                <Services />
                <Showcases />
                <Reviews />
                <About />
                <Contact />
            </Container>
            <Footer />
        </React.Fragment>
    )
}