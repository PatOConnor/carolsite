import PageTitle from "../components/PageTitle";
import BodySection from "../components/BodySection";
import blurbsToContent from "../functions/blurbsToContent";
const Main = () => {
    const sectionOneBlurbs = [
        {
            // TODO: update image here

            // image: {
            //     imageID: "carolpic1",
            //     imageSrc: "./img/carol1.bmp", imageAlt: "Picture of Carol", imageStyle: "right-image",
            // },
            header: "Welcome to My Practice!",
            text: "I am a licensed psychologist, providing in person sessions for adults in Portland, Oregon, as well as teletherapy sessions for residents of Oregon, New Jersey, and New York. I specialize in addressing childhood/developmental trauma to alleviate anxiety and depression and buildd healthy relationships."
        },
        {
            text: "Traditional \"talk\" therapy is one way to address problems, but for some people it is not enough.  Many people feel that while they have learned much about themselves, they still feel the same and struggle with the same problems. I offer treatment that integrates various innovative, effective approaches; Somatic Experiencing, EMDR, Internal Family Systems theory and Mindfulness practices that organically and successfully allow change to happen."
        },

    ]

    const sectionTwoBlurbs = [

        {
           
            text: "We will tailor these approaches to respond to you and your situation. Everyone has inner resources that can help them to heal.  Working together, we will begin by understanding who you are, how your experiences in life have affected you and most importantly, how these experiences are remembered inside you.   Providing a body-based foundation allows for a more meaningful process of internal growth and best supports our capacity for resiliency.  This approach can lead to greater vitality and more permanent outcomes. We are using tools that are innovative yet clinically sound and safe.   I believe that every individual possesses compassion, creativity, curiosity, and courage to bring about positive change in their life.  I am here to support you in feeling comfortable bringing your true self to therapy."
        }

    ]
    const sectionThreeBlurbs = [
        {
            header: "Experiencing therapy with me:",
            text: "I frequently make sure we are \"on the same page\" when it comes to use of language, ideas, and concepts.  I am always checking in and evaluating your understanding regarding your needs, feelings, and goals.  You will understand where you are, how you got there, and where you want to go. Resilience involves building capacity to hold difficulty and challenge without letting it overwhelm us.  In therapy you will experience how to metabolize and grow from these experiences, how to choose your responses to situations so you can respond rather than react."
        },

    ]

    const sectionFourBlurbs = [
        {
            header: "Get Started",
            text: "Finding the right therapist is so important. Want to explore if we are a good therapeutic fit? Contact me to schedule a brief initial consultation at no charge."
        }

    ]

    const creekImage = {
        imageID: "creek",
        imageSrc: "./img/creek.bmp", 
        imageAlt:"Creek in Willamette Valley", 
        imageStyle: ""
    }

    const horsesImage = {
        imageID: "horses",
        imageSrc: './img/horses.avif',
        imageAlt: "horses",
        imageStyle: "",
    }

    const carolImage = {
        imageID: "carol1",
        imageSrc: './img/carol1.bmp',
        imageAlt: "picture of carol",
        imageStyle: 'contact-image'
    }

    const sectionOneJSX = blurbsToContent({ blurbData: sectionOneBlurbs });
    const sectionTwoJSX = blurbsToContent({ blurbData: sectionTwoBlurbs });
    const sectionThreeJSX = blurbsToContent({ blurbData: sectionThreeBlurbs });
    const sectionFourJSX = blurbsToContent({ blurbData: sectionFourBlurbs });


    return (<>
        <BodySection
            sectionID={"main-section-1"}
            animationType={"fade-in"}
            sectionTitle={""}
            sectionContent={sectionOneJSX}
            imageLayout={"right-image"}
            imageData={carolImage}
            />
        <BodySection
            sectionID={"main-section-2"}
            animationType={"fade-in"}
            sectionTitle={""}
            sectionContent={sectionTwoJSX}
            imageLayout={"left-image"}
            imageData={horsesImage}
            />
        <div id="quote1" className="body-section quote">
            <p>“Trauma is not what happens to us. But what we hold inside in the absence of an empathetic witness.” — Dr Peter Levine</p>
        </div>
        <BodySection
            sectionID={"main-section-3"}
            animationType={"fade-in"}
            sectionTitle={""}
            sectionContent={sectionThreeJSX}
            imageLayout={"right-image"}
            imageData={creekImage}
            />
        <BodySection
            sectionID={"main-section-4"}
            animationType={"fade-in"}
            sectionTitle={""}
            sectionContent={sectionFourJSX}
            />


    </>)
}

export default Main;