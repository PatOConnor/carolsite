const SectionBlurb = ({imageData, headerText, bodyText}) => {
    //creates html bit for the title of the paragraph if there is one

    if (imageData === undefined){
        imageData = null;
    }    

    let headerHTML = headerText === null ? "" : <h4>{headerText}</h4>
    let imageHTML = imageData === null ? "" : <img className={imageData.imageStyle} src={imageData.imageSrc} alt={imageData.imageAlt}/>
    
    let bodyHTML = <p>{bodyText}</p>

    return (<div className="body-blurb">{headerHTML}{imageHTML}{bodyHTML}</div>)
}

export default SectionBlurb;