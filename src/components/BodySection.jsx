//consolidate divs with clas "body-section" into this component,
// to coordinate animation cues better

import blurbsToContent from "../functions/blurbsToContent";

const BodySection = ({sectionID, animationType, sectionTitle, sectionContent}) => {
    let cssClass = 'body-section '+animationType
    
    const sectionTitleHTML = sectionTitle === "" ? "" : <h4>{sectionTitle}</h4>

    
    return (
        <div id={sectionID} className={cssClass}>
            {/* sectiontitleHTML is wither a subheader or blank */}
            {sectionTitleHTML}
            <div className="body-section-content-container">
                {sectionContent}
            </div>
        </div>
    );
}
export default BodySection