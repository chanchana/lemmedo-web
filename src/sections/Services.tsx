import React from "react"
import { Grid } from "../common"
import { Collapsible } from "../components/Collapsible"
import { SectionHeading } from "../components/SectionHeader"
import { ServiceCard } from "../components/ServiceCard"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { ResponsiveContext } from "../contexts/responsive"
import { serviceContents } from "../data/services"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const Services = () => {
    // const sectionRef = React.useRef(null)
    // useNavigation(sectionRef, Parameter.Navigation.Services.Path)
    // const { isMobile } = React.useContext(ResponsiveContext)

    // const renderDesktopServices = () => (
    //     <Grid columns={3} gap={Style.Spacing.L}>
    //         {serviceContents.map(({ title, caption, icon }, index) =>
    //             <ServiceCard key={`service-${index}`} title={title} caption={caption} icon={icon} />
    //         )}
    //     </Grid>
    // )

    // const renderMobileServices = () => (
    //     <React.Fragment>
    //         <Grid columns={2} gap={Style.Spacing.L}>
    //             {serviceContents.slice(0, 4).map(({ title, caption, icon }, index) =>
    //                 <ServiceCard key={`service-${index}`} title={title} caption={caption} icon={icon} />
    //             )}
    //         </Grid>
    //         <Collapsible>
    //             <Grid columns={2} gap={Style.Spacing.L} marginTop={Style.Spacing.L}>
    //                 {serviceContents.slice(4).map(({ title, caption, icon }, index) =>
    //                     <ServiceCard key={`service-sub-${index}`} title={title} caption={caption} icon={icon} />
    //                 )}
    //             </Grid>
    //         </Collapsible>
    //     </React.Fragment>
    // )
    
    // return (
    //     <div ref={sectionRef}>
    //         <SectionHeading title={Content.Services.Title} subtitle={Content.Services.Subtitle} />
    //         {isMobile && renderMobileServices()}
    //         {!isMobile && renderDesktopServices()}
    //     </div>
    // )
}