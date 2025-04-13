import React, { useState } from 'react';
import BodySection from './BodySection';

const ContactForm = () => {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');

    const handleSendEmail = () => {
        const subject = encodeURIComponent(`Email from website link: ${field2}`);
        const body = encodeURIComponent(`Sender: ${field1}\nBody: ${field3}`);
        window.location.href = `mailto:marcus.carol@gmail.com?subject=${subject}&body=${body}`;
    };

    return (


        <BodySection
            sectionID="contact-form"
            animationType={"fade-in flexible-layout ultrawide"}
            sectionTitle={""}
            direction={"vertical-layout ultrawide"}
            sectionContent={

                <div className='body-section-content-container body-blurb ultrawide rightalign'>
                    <div className='flex ultrawide rightalign'>
                        <label htmlFor="field1">Name: </label>
                        <input
                            type="text"
                            id="field1"
                            // className='flex ultrawide'
                            value={field1}
                            onChange={(e) => setField1(e.target.value)}
                        />
                    </div>
                    <div className='flex ultrawide rightalign'>
                        <label htmlFor="field2">Subject: </label>
                        <input
                            type="text"
                            id="field2"
                            // className='flex ultrawide'
                            value={field2}
                            onChange={(e) => setField2(e.target.value)}
                        />
                    </div>
                    <div className='flex horizontal-fill rightalign'>
                        <label htmlFor="field3">Message: </label>
                        <input
                            type="text"
                            id="field3"
                            className='very-tall-textbox flex ultrawide'
                            value={field3}
                            onChange={(e) => setField3(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSendEmail}>Email Me</button>
                </div>
            } />
    );
};

export default ContactForm;