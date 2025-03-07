import SectionBlurb from "../components/SectionBlurb"
import Credentials from "../components/Credentials";
import blurbsToContent from "../functions/blurbsToContent";
import PageTitle from "../components/PageTitle";
import BodySection from "../components/BodySection";

const AboutMe = () => {

    const sectionThreeBlurbs = [
        {
            header: "Experiencing therapy with me:",
            text: "I frequently make sure we are \"on the same page\" when it comes to use of language, ideas, and concepts.  I am always checking in and evaluating your understanding regarding your needs, feelings, and goals.  You will understand where you are, how you got there, and where you want to go. Resilience involves building capacity to hold difficulty and challenge without letting it overwhelm us.  In therapy you will experience how to metabolize and grow from these experiences, how to choose your responses to situations so you can respond rather than react."
        },

    ]

    const aboutMeBlurbs = [
        {
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

    const aboutMeJSX = blurbsToContent({ blurbData: aboutMeBlurbs });
    const sectionThreeJSX = blurbsToContent({ blurbData: sectionThreeBlurbs });
    return (<>
        <PageTitle text="About Me" />
        <div className="flex vertical-layout">

            <BodySection
                sectionID={"about-me-1"}
                animationType={"fade-in"}
                sectionTitle={""}
                sectionContent={aboutMeJSX}
            />

            <BodySection
                sectionID={"main-section-3"}
                animationType={"fade-in"}
                sectionTitle={""}
                sectionContent={sectionThreeJSX}
                imageLayout={"right-image"}
            />
            <Credentials />
        </div>
        <div id="quote2" className="quote body-section">
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