 //import logo image

import { Link } from "react-router";

 const Header = () => {

    const links = [
        {text: "Home", linkUrl: "/"},
        {text: "About Me", linkUrl: "/about"},
        {text: "Treatment Models", linkUrl: "/treatment"},
        {text: "FAQ", linkUrl: "/faq"},
        {text: "Supervision/Consultation", linkUrl: "supervision"},
        {text: "Resources", linkUrl: "resources"},
    ]

    return (
        <header>
            <div className="logo-container">
                <div className="logo-top">Carol Marcus</div>
                <div className="logo-dividing-bar"></div>
                <div className="logo-bottom">Therapy | Somatic Experiencing | Consultation</div>
            </div>
            <div className="header-links-container">
                {links.map(linkData => <Link to={linkData.linkUrl}>{linkData.text}</Link>)}
            </div>
        </header>
    );
 };

 export default Header;
