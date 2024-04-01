"use client"
import React from 'react';
import "./SkillProgress.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const SkillProgress = () => {
    const html = 0.70;
    const css = 0.70;
    const js = 0.50;
    const bootstrap = 0.60;
    const tailwinds = 0.30;
    const material = 0.30;
    const react = 0.50;
    const nextJs = 0.30;
    const nodeJs = 0.40;
    const express = 0.50;
    const mongoDb=0.30
    const mySql=0.30
    const c = 0.40
    const python = 0.40 
    const java = 0.30 
    const git = 0.20
    return (
        <div className="progress">
            <div className='progress-container top-container'>
                <div className="html skill-card">
                    <CircularProgressbar value={html} maxValue={1} text={`${html * 100}%`} 
                    styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    
                    <h4>HTML</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={js} maxValue={1} text={`${js * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>JAVASCRIPT</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={css} maxValue={1} text={`${css * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>CSS</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={bootstrap} maxValue={1} text={`${bootstrap * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>BOOTSTRAP</h4>
                </div>
            
            </div>
            <div className='progress-container bottom-container'>
                <div className="html skill-card">
                    <CircularProgressbar value={tailwinds} maxValue={1} text={`${tailwinds * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Tailwinds</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={material} maxValue={1} text={`${material * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Material UI</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={react} maxValue={1} text={`${react * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>React Js</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={nextJs} maxValue={1} text={`${nextJs * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Next Js</h4>
                </div>
            
            </div>
            <div className='progress-container bottom-container'>
                <div className="html skill-card">
                    <CircularProgressbar value={nodeJs} maxValue={1} text={`${nodeJs * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Node Js</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={express} maxValue={1} text={`${express * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Express Js</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={mongoDb} maxValue={1} text={`${mongoDb * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>MongoDB</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={mySql} maxValue={1} text={`${mySql * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>MySql</h4>
                </div>
            
            </div>
            <div className='progress-container bottom-container'>
                <div className="html skill-card">
                    <CircularProgressbar value={python} maxValue={1} text={`${python * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Python</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={java} maxValue={1} text={`${java * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>Java</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={c} maxValue={1} text={`${c * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>C</h4>
                </div>
                <div className="html skill-card">
                    <CircularProgressbar value={git} maxValue={1} text={`${git * 100}%`}  styles={buildStyles(
                        {
                            pathColor :'#FFB400',
                            backgroundColor:"#272F40",
                            textColor:'#FFB400',
                            trailColor: '#1B1B1B',
                        }
                    )}/>
                    <h4>GIT</h4>
                </div>
            
            </div>
        </div>
        
    );
};

export default SkillProgress;