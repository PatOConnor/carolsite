import SectionBlurb from "../components/SectionBlurb"
import Credentials from "../components/Credentials";
import blurbsToContent from "../functions/blurbsToContent";
import PageTitle from "../components/PageTitle";
import BodySection from "../components/BodySection";

const AboutMe = () => {

    const aboutMeBlurbs = [
        {
            image: {
                imageID: "",
                imageSrc: null,
                imageAlt: null,
                imageStyle: null
            },
            header: "How I Work",
            text: <>I have many years of experience, over 30 years of growing and evolving in my work. I have a Ph.D. in psychology, and am licensed in Oregon, New Jersey and New York. Early in my career I trained as a Relational Psychoanalytic Psychotherapist and I continue to appreciate the insights and experience that are still relevant.  My work took an important turn in my training in Somatic Experiencing, and IFS.  I have found that integrating these models has provided profound and effective, organic change in those I work with. 
            <br />
            <br />
            These modalities support clients to process traumatic events both “big T traumas” often single events and “little t traumas” ongoing difficulties often in childhood in which for whatever reason we did not get our needs met.
            <br />
            <br />
            In addition to private practice, I have previous experience working children, adolescents, adults, and couples with diverse racial, socioeconomic, gender identity, and sexual orientations. Although my current practice is <strong>limited to adults only.</strong></>
        },
    ]

    const aboutMeJSX = blurbsToContent({blurbData:aboutMeBlurbs});

    return (<>
        <PageTitle text="About Me"/>
        <div className="flex horizontal-layout">

        <BodySection 
            sectionID={"about-me-1"}
            animationType={"fade-in"}
            sectionTitle={""}
            sectionContent={aboutMeJSX}
            />
        <Credentials/>
            </div>
        <div id="quote2" className="body-section quote">
            <p>“The body is designed to renew itself through continuous self-correction.  These same principles also apply to the healing of psyche, spirit, and soul.”  - Dr. Peter Levine
            </p>
        </div>
        {/* <div id="quote3" className="body-section quote">
            <p>
                “We're all just walking each other home.”
                —Ram Dass
            </p>
        </div> */}
    </>
    )
}

export default AboutMe;