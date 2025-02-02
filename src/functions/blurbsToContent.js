  //takes data and turns it into an array of 
  //SectionBlurbs ready to use as a sectionContent 
  //argument for a BodySection component
  import SectionBlurb from "../components/SectionBlurb"
  //blurbData is an array containing objects
  const blurbsToContent = ({blurbData}) => {
    let sectionBlurbs = []
    
    for (let i = 0; i < blurbData.length; i++){
      
      //set headerText and image to the associated values if they exist and were passed as args
      
      let blurbHeaderText = null
      if (blurbData[i].header !== undefined){
        blurbHeaderText = blurbData[i].header
      }
      
      let blurbImage = null;
      if (blurbData[i].image !== undefined){
        blurbImage = blurbData[i].image 
      };

      

      //bodyText should always be there
      let blurbBodyText = blurbData[i].text

      const newSectionBlurb = 
        <SectionBlurb imageData={blurbImage} headerText={blurbHeaderText} bodyText={blurbBodyText} />
      sectionBlurbs.push(newSectionBlurb)
    }

    return sectionBlurbs;
  }

  export default blurbsToContent;