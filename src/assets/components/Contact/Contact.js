import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contactCont'>
            <div className='contactHead'>
                <h1>Let's Connect!</h1>
                <p>Fill out the form below and I'll get back to you shortly</p>
            </div>
            
            <div id="subContainer">
                <div class="submission">
                    <form
                        id="contactForm"
                        action="https://formspree.io/f/xayzdoob"
                        method="POST"
                    >
                        <input
                            class="req"
                            type="text"
                            name="name"
                            placeholder="NAME*"
                            required
                        />
                        <input
                            class="req"
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