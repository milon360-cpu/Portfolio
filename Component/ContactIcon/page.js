"use client"
import React from 'react';
import "../../app/contact/contact.css"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
const ContactIcon = () => {
    return (
        <div>
            <div className="mail-icon-container">
                <span><MarkEmailReadIcon className="mail-icon"/></span>
                    <span> <span style={{opacity:".50"}}>MAIL ME</span>  <br /> heymilon@gmail.com</span>
            </div>
            <div className="mail-icon-container" style={{marginTop:"20px"}}>
                <span><PhoneInTalkIcon className="mail-icon"/></span>
                <span> <span style={{opacity:".50"}}>CALL ME</span>  <br /> +8801771341302</span>
            </div>
        </div>
    );
};

export default ContactIcon;