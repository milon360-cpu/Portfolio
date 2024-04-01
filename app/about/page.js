"use client"
import React from 'react';
import "./about.css"
import SkillProgress from '@/Component/SkillProgress/page';
import TimeLine from '@/Component/TimeLine/page';
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div className='about-container container m-auto'>
            <Fade>
            <h1>RESUME</h1>
            <h2>ABOUT <span style={{color:"#FFB400"}}>ME</span></h2>

            <div className="personal-info-container flex justify-around flex-wrap container m-auto">
                <div className="personal-info">
                    <h3 className='max-md:px-1'>PERSONAL INFOS</h3>
                    <div className="flex personal-details justify-between flex-wrap">
                            <div className='left-info-container'>
                                <p><span>First Name:</span> Milon</p>
                                <p><span>Last Name:</span> Mondal</p>
                                <p><span>Age:</span>23 Years</p>
                                <p><span>Nationality:</span> Bangladeshi</p>
                                <p><span>Freelance</span> Available</p>     
                            </div>
                            <div className="right-info-container">
                                <p><span>Address:</span> Dhanmondi 15 Staff Quarter</p>
                                <p><span>Phone:</span> 01771341302</p>
                                <p><span>Email:</span> heymilon@gmail.com</p>
                                <p><span>Facebook</span> Milon Mondal</p>
                                <p><span>Language</span> Bengali, English</p>                                 
                                
                            </div>
                    </div>
                </div>
                <div className="project-info grid grid-cols-2 gap-10 max-md:p-5">
                     <div className="experience project-info-card ">
                        <h4>1<sup>+</sup></h4>
                        <p>__ YEARS OF <br /> <span>EXPERIENCE</span></p>
                     </div> 
                     <div className="project project-info-card">
                        <h4>20<sup>+</sup></h4>
                        <p>__ COMPLETED  <br /> <span>PROJECTS</span></p>
                     </div>
                     <div className="customers project-info-card">
                        <h4>00<sup>+</sup></h4>
                        <p>__ HAPPY  <br /> <span>CUSTOMERS</span></p>
                     </div>
                     <div className="awards project-info-card">
                        <h4>00<sup>+</sup></h4>
                        <p>__ AWARDS  <br /> <span>WON</span></p>
                     </div>
                </div>
            </div>
            <hr />
            <h5 className='mb-10'>MY SKILLS</h5>
            <SkillProgress />
             <hr />
            <h5 className='mb-10'>EDUCATION & EXPERIENCE</h5>
            <TimeLine />
            </Fade>
        </div>
    );
};

export default About;