// need the title, author, pic, and blurb

const BookPanel = ({ bookTitle, amazonLink, author, imgSrc, blurb }) => {
    return (<div className="body-blurb book-panel">

        {/* <a href={amazonLink}><img src={imgSrc} /></a> */}
        <div className="book-info-container">

            <h4><a href={amazonLink}>{bookTitle}</a></h4>
            <span>{author}</span>
        </div>

        {/* <p>{blurb}</p> */}



    </div>)

}

export default BookPanel;