import PageTitle from "../components/PageTitle"
import SectionBlurb from "../components/SectionBlurb"
import BodySection from "../components/BodySection"
const FAQ = () => {
    //I had already hardcoded it when i set up the component hiearchy
    const faqJSX = [
        <SectionBlurb headerText={<>Do you accept insurance?</>} bodyText={<>While I do not accept insurance, I can provide insured clients with a Statement for Insurance Reimbursement (aka Superbill). This is an invoice demonstrating services and proof of payment to provide reimbursement by your insurance company or employer for FSA/HSA.<hr/>Check with your insurance company to determine their coverage rate for out-of-network mental health services. This will help you understand what the full cost to you will be. ​​Depending on your current health insurance provider or employee benefit plan, it may be possible for services to be covered in part.</>} />,
        <SectionBlurb headerText={<>Do You Offer a Sliding Scale?</>} bodyText={<>I understand we all have different financial circumstances.  When I can, I will offer a sliding scale fee.  Please contact me to discuss. </>} />,
        <SectionBlurb headerText={<>Payment Policies</>} bodyText={<>I require 24 hours advance notice for appointment cancellation or rescheduling. The full fee will be charged for missed or cancelled sessions without such notification. Please note your insurance company cannot be billed for services that were not rendered. <br /> <br /> I accept checks, Zelle, and Venmo</>} />,
        
    ]

    return (<>
        <PageTitle text="Policies | Frequently Asked Questions"/>
        <BodySection 
        sectionID={"faq-section"}
        animationType={"fade-in"}
        sectionTitle={""}
        sectionContent={faqJSX}
        direction={"flex horizontal-layout"}/>
    </>)
}

export default FAQ