import BodySection from "../components/BodySection"
import PageTitle from "../components/PageTitle"
import SectionBlurb from "../components/SectionBlurb"
import blurbsToContent from "../functions/blurbsToContent"


const ContactMe = () => {


    return (<>
        <PageTitle text="Contact Me" />
        <div className="flex flexible-layout">

            <BodySection
                sectionID={"about-me-1"}
                animationType={"fade-in"}
                sectionTitle={""}
                sectionContent={<SectionBlurb 
                
                bodyText={<>
                <p>666-666-6666</p>
                <p>carol@carolmarcus.com</p>
                </>
            }
                
                />}
                    />
                
                
            
        </div>
    </>)
}

export default ContactMe