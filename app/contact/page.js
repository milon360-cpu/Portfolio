"use client"
import React from 'react';
import "./contact.css"
import "../about/about.css"
import ContactIcon from '@/Component/ContactIcon/page';
import ContactForm from '@/Component/ContactForm/page';
import {Fade} from 'react-awesome-reveal';
const Contact = () => {
    return (
        <div className='about-container container m-auto'>
            <Fade>
            <h1>CONTACT</h1>
            <h2>GET IN <span style={{color:"#FFB400"}}>TOUCH</span></h2>    
            <div className="contact-info-container grid grid-cols-12 gap-10">
                <div className="contact-info col-span-5 max-sm:col-span-12 max-sm:px-2">
                    <h3>DON'T BE SHY!</h3>
                    <p>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <br />
                    <ContactIcon /> 
                </div>
                <div className="contact-info col-span-7 max-sm:col-span-12 ">
                       <ContactForm />
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Contact;