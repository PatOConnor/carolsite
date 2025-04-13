//consolidate divs with clas "body-section" into this component,
// to coordinate animation cues better

import blurbsToContent from "../functions/blurbsToContent";


// todo: add image data prop
const BodySection = ({ sectionID, animationType, sectionTitle, sectionContent, imageLayout, imageData, direction }) => {
    if (direction === undefined ) {
        direction = '';
    }
    
    console.log(direction)
    let cssClass = 'body-section ' + animationType

    const sectionTitleHTML = sectionTitle === "" ? "" : <h4>{sectionTitle}</h4>

    if (imageData === undefined) {
        imageData = null;
    }
    
    const imageHTML = imageData === null ? "" : <img className={imageData.imageStyle} src={imageData.imageSrc} alt={imageData.imageAlt} />


    let content = ''
    if (imageLayout === "right-image") {
        content = <div id={sectionID} className={cssClass}>
            {/* sectiontitleHTML is wither a subheader or blank */}
            <div className={"body-section-content-container" + direction}>
                {sectionTitleHTML}
                {sectionContent}
            </div>
            {imageHTML}
        </div>
    } else {
        content = <div id={sectionID} className={cssClass}>
            {/* sectiontitleHTML is wither a subheader or blank */}
            {imageHTML}
            <div className={"body-section-content-container " + direction}>
                {sectionTitleHTML}
                {sectionContent}
            </div>
        </div>
    }

    

    return (content);
}
export default BodySection