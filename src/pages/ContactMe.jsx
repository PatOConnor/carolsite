import BodySection from "../components/BodySection"
import PageTitle from "../components/PageTitle"
import SectionBlurb from "../components/SectionBlurb"
import blurbsToContent from "../functions/blurbsToContent"
import ContactForm from "../components/ContactForm"


const ContactMe = () => {


    return (<>
        <PageTitle text="Contact Me" />
        <div className="flex flexible-layout">

            <BodySection
                sectionID={"about-me-1"}
                animationType={"fade-in flexible-layout"}
                sectionTitle={""}
                direction={"vertical-layout"}
                sectionContent={
                    <SectionBlurb
                        bodyText={<>
                            <p>555-555-5555</p>
                            <p>marcus.carol@gmail.com</p>
                        </>
                        }

                    />}
            />
            <ContactForm />

            





        </div>
    </>)
}

export default ContactMe