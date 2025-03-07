import SectionBlurb from "../components/SectionBlurb"
import BodySection from "../components/BodySection"
import PageTitle from "../components/PageTitle"

const Supervision = () => {
    const supervisionJSX = [
        <SectionBlurb headerText="" bodyText={<> I particularly enjoy helping those who are interested in newly exploring these approaches and how they might begin to use these modalities and integrate them into their current work.</>}/>,
        <SectionBlurb headerText="" bodyText={
        <p>
            I offer consultation for those who have or are interested in integrative practices that include the mindfulness based trauma therapies: Somatic Experiencing, EMDR, Internal Family Systems, and Inner Relationship Focusing.
            </p>} />,
        <SectionBlurb headerText="" bodyText={<>For Somatic Experiencing® students, I offer sessions at the Beginning, Intermediate, and Advanced I level. </>}/>,
]

    return (<>
    <PageTitle text="Supervision and Consultation"/>
    <BodySection
        sectionID={'supervision-section-1'}
        animationType={"fade-in"}
        sectionTitle={""}
        sectionContent={supervisionJSX}
        direction={"flex vertical-layout"}
    />
    </>)
}

export default Supervision