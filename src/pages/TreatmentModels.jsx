import SectionBlurb from "../components/SectionBlurb"
import PageTitle from "../components/PageTitle"
const TreatmentModels = () => {
    return (
        <>
        <PageTitle text="Treatment Models"/>
        <div className="body-section">
        <SectionBlurb headerText="Somatic Experiencing (SE):" bodyText="A growing number of therapies understand that fundamental change sometimes occurs in a more experiential, non-verbal manner. We now have a growing understanding of the way our bodies and not just our minds process and store difficult or overwhelming experiences. Working to increase awareness of stuck or habitual ways of responding can free some of these areas of difficulty or rigidity or can bring more stability to someone who often experiences states of overwhelm and chaos or, conversely, states of dissociation and freeze. "/>
        </div>

        <div className="body-section">
        <SectionBlurb headerText="Internal Family Systems (IFS):" bodyText="Internal Family Systems (IFS) is a model of psychotherapy that maintains we are all made up of sub-personalities or “parts” that sometimes work to our advantage and protect us from unbearable emotions, thoughts and memories, but at other times over-function or overreact in ways that are not to our advantage. The goal of IFS is to help clients heal by developing a greater balance and harmony between these protective parts and burdened parts through a growing relationship with our own compassion, curiosity and sense of perspective about our inner experience."/>
        <SectionBlurb headerText="" bodyText="The work in IFS then is to nurture our connection to our Self, and from this place, discover, learn, and engage with our parts, witness what they have been carrying, heal their traumas, release their roles, and discover what else they would like to be doing. IFS is grounded in the belief that healing comes from your parts being seen, recognized, and guided by your core Self, which rests on the strength of your Self’s relationship with each of your many parts. "/>
        <SectionBlurb headerText="" bodyText="IFS is based on the premise that all parts are valuable and have good intentions, and yet due to life’s circumstances, they often take on roles that come with heavy burdens, are extreme, and may be harmful to us in some way. IFS also assumes that everybody has an essential Self, which has the power to heal parts as well as provide guidance, wisdom, and harmony to our inner system. IFS is a highly collaborative, non-judgmental approach, where the experience of respect and appreciation for all our parts is prioritized, nurtured, and promoted in and outside of session. "/>
        </div>

        <div className="body-section">
        <SectionBlurb headerText="Inner Relationship Focusing:" bodyText="Inner Relationship Focusing is a body-oriented process of self-awareness and emotional healing. It’s as simple as noticing how you feel–and then having a conversation with your feelings in which you do most of the listening.  Focusing starts with the familiar experience of feeling something in your body that is about what is going on in your life. Focusing allows you to get past what has been making you stuck, using the body-mind’s inherent ability to heal and live forward into new possibilities."/>
        </div>

        <div className="body-section">
        <SectionBlurb headerText="EMDR" bodyText="EMDR treatment works by helping the individual process distressing thoughts, feelings and memories that can reduce symptoms of trauma, improve functioning and improve one’s psychological state. Eye Movement Desensitization and Reprocessing (EMDR) therapy is an interactive psychotherapy technique used to relieve psychological stress. It is an effective treatment for trauma and post-traumatic stress disorder (PTSD). During EMDR therapy sessions, you relive negative or triggering experiences in brief doses while the therapist directs your eye movements."/>
        {/* todo: add the hyperlink and the styling; probably should just add an argument for a potential JSX input instead of raw text, prioritizing the JSX if it's present */}
        <SectionBlurb headerText="" bodyText={"EMDR is thought to be effective because recalling distressing events is often less emotionally upsetting when your attention is diverted. This allows you to be exposed to the memories or thoughts without having a strong psychological response. Over time, this technique is believed to lessen the impact that the memories or thoughts have on you.  For more information check out the EMDR site: emdria.org "}/>
        </div>

        <div id="quote3" className="body-section quote">
            <p>
                “Trauma victims cannot recover until they become familiar with and befriend the sensations in their bodies.”
                —Bessel A. ven der Kolk
            </p>
        </div>
        </>
    )
}

export default TreatmentModels