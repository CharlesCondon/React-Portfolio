import React from 'react'
import './Contact.css'
import { useLocation } from "react-router-dom";

function Contact() {
    const location = useLocation();

    React.useEffect(() => {
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search + location.hash,
            page_search: location.search,
            page_hash: location.hash,
            page_title: "Contact"
        });
    }, [location]);

    return (
        <div className='contactCont'>
            <div className='contactHead'>
                <h1>Let's Connect!</h1>
                <p>Fill out the form below and I'll get back to you shortly</p>
            </div>
            
            <div id="subContainer">
                <div className="submission">
                    <form
                        id="contactForm"
                        action="https://formspree.io/f/xayzdoob"
                        method="POST"
                    >
                        <input
                            className="req"
                            type="text"
                            name="name"
                            placeholder="NAME*"
                            required
                        />
                        <input
                            className="req"
                            type="email"
                            name="_replyto"
                            placeholder="EMAIL*"
                            required
                        />
                        <input type="text" name="subject" placeholder="SUBJECT" />

                        <textarea name="message" placeholder="MESSAGE"></textarea>

                        <input type="submit" value="SEND" />
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact