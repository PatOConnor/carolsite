import SectionBlurb from "../components/SectionBlurb";
import BookPanel from "../components/BookPanel";
import PageTitle from "../components/PageTitle";
import './resources.css';
const Resources = () => {
    return (<>
        <PageTitle text="Resources"/>
        <div className="body-section">
            <SectionBlurb headerText={"Somatic Experiencing® Website"} bodyText={<>The <a href="https://traumahealing.org/resources/">Somatic Experiencing® Website</a> has a wealth of resources to read, listen or view.</>}/>
        </div>
        <div className="book-block">

        <BookPanel
            bookTitle={"Trauma-Proofing Your Kids: A Parents’ Guide for Instilling Confidence, Joy and Resilience"}
            amazonLink={"https://www.amazon.com/Trauma-Proofing-Your-Kids-Instilling-Confidence/dp/1556436998"}
            author={"Peter Levine, Ph.D. and Maggie Kline, M.S."}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            blurb={""} />
        <BookPanel
            bookTitle={"Crash Course: A Self-Healing Guide to Auto Accident Trauma and Recovery"}
            amazonLink={"https://www.amazon.com/Crash-Course-Self-Healing-Accident-Recovery/dp/1556433727"}
            author={"Diane Poole Heller, Ph.D."}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            // blurb={"An excellent self-help book on the use of Somatic Experiencing therapy in recovering from trauma caused \nby an automobile accident"} 
            />
        <BookPanel
            bookTitle={"Wherever You Go, There You Are: Mindfulness Meditation in Everyday Life"}
            amazonLink={"https://www.amazon.com/Wherever-You-There-Are-Mindfulness/dp/1401307787"}
            author={"Jon Kabat-Zinn"}
            imgSrc={"https://m.media-amazon.com/images/I/81YGcWlDmUL._SL1500_.jpg"}
            blurb={""} />
        <BookPanel
            bookTitle={"Waking the Tiger"}
            amazonLink={"https://www.amazon.com/Waking-the-Tiger-Healing-Trauma/dp/B01LZKDSNZ/"}
            author={"Peter Levine, Ph.D."}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            blurb={""} />
        <BookPanel
            bookTitle={"The Body Keeps the Score"}
            amazonLink={"https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748"}
            author={"Bessel Van Der Kolk, M.D."}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            blurb={""} />
        <BookPanel
            bookTitle={"Radical Acceptance"}
            amazonLink={"https://www.amazon.com/Radical-Acceptance-Embracing-Heart-Buddha/dp/0553380990"}
            author={"Tara Brach"}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            blurb={""} />
        <BookPanel
            bookTitle={"Full Catastrophe Living"}
            amazonLink={"https://www.amazon.com/Full-Catastrophe-Living-Revised-Illness/dp/0345536932"}
            author={"Jon Kabat-Zinn"}
            imgSrc={"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif"}
            blurb={""} />
            </div>
    </>

    );
}

export default Resources;