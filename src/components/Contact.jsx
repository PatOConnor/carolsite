/* Component for 'contact me' panel. on mobile, it will tap to open and close, 
and on desktop it will always be visible on the right side of the screen */

import './contact.css';

const Contact = () => {
    return (<div className="body-section contact-panel">
            <img id='carolpic1' src='./img/carol1.bmp' alt='Picture of Carol' className='contact-image'/>
            <li className="contact-header">Connect With Me</li>
            <li>📞<a href="tel:503-755-5247">(503)-755-5247</a></li>
            <li>📧<a href="mailto:carol@carol-marcus.com">carol@carol-marcus.com</a></li>
    </div>)
};

export default Contact;