 //import logo image

import { Link } from "react-router";

 const Header = () => {

    const links = [        
        // // TESTING LINKS
        // {text: "Home", linkUrl: "/"},
        // {text: "About Me", linkUrl: "/about"},
        // {text: "Treatment Models", linkUrl: "/treatment"},
        // {text: "FAQ", linkUrl: "/faq"},
        // // {text: "Supervision/Consultation", linkUrl: "supervision"},
        // {text: "Resources", linkUrl: "/resources"},

        // PRODUCTION LINKS
        {text: "Home", linkUrl: "/carolsite/"},
        {text: "About Me", linkUrl: "/carolsite/about"},
        {text: "Treatment Models", linkUrl: "/carolsite/treatment"},
        {text: "Supervision", linkUrl: "/carolsite/supervision"},
        {text: "Resources", linkUrl: "/carolsite/resources"},
        {text: "FAQ", linkUrl: "/carolsite/faq"},
        {text: "Contact Me", linkUrl: "/carolsite/contact"}
    ]

    return (
        <header>
            <div className="logo-container">
                <div className="logo-top">Carol S. Marcus, Ph.D</div>
                <div className="logo-dividing-bar"></div>
                <div className="logo-bottom">Therapy | Supervision | Somatic Experiencing</div>
            </div>
            <div className="header-links-container wrap">
                {links.map(linkData => <Link to={linkData.linkUrl}>{linkData.text}</Link>)}
            </div>
        </header>
    );
 };

 export default Header;
