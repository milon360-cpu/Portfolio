"use client"
import React from 'react';
import "./contactForm.css"
import NearMeIcon from '@mui/icons-material/NearMe';
const ContactForm = () => {
    return (
        <div>
            <div className="form-group">
                 <input type="text" name='name' placeholder='YOUR NAME'/>
                 <input type="email" name="email" id="" placeholder='YOUR EMAIL'/>
                 <textarea name="" id="" cols="30" rows="10" placeholder='YOUR MESSAGE'></textarea>
                 <button>
                    <span>
                         SEND MESSAGE
                    </span>
                    <span className='send-message-icon'><NearMeIcon style={{fontSize:"35px"}}/></span>
                 </button>
            </div>
        </div>
    );
};

export default ContactForm;