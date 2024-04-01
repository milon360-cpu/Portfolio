"use client"
import React,{useEffect, useState} from 'react';
import DarkMood from './page';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import "./darkMood.css"
import Drawer from '@mui/material/Drawer';
import Navigation from '../Navigation/page';
import CloseIcon from '@mui/icons-material/Close';
const DarkMoodContainer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <div className="" >
               <div className='top-header-container container m-auto'>
                    <h2 className="text-white invisible"><DensityMediumIcon  onClick={()=> setIsDrawerOpen(true)}/></h2>
                    <DarkMood/>
               </div>
               <div className="drawer-container">
                    <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}
                        PaperProps={{
                            style: {
                                backgroundColor: '#1B1B1B', 
                            },
                        }}> 
                        <CloseIcon className='close-icon' onClick={()=> setIsDrawerOpen(false)}/>
                        <br /> <br />
                        <Navigation />
                    </Drawer>                      
                </div>
              
        </div>
    );
};

export default DarkMoodContainer;