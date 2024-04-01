"use client"
import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./nav.css"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
const Navigation = () => {
    const router = usePathname();
    const route = useRouter();
    return (
        <div className='nav-container'>
            <ul>
                <li className={router === "/" && "active-nav-color"} onClick={()=>route.push("/")}>
                    <span>HOME</span>
                     <CottageIcon style={{fontSize:"30px"}}/>                              
                </li>
                <li className={router === "/about" && "active-nav-color"} onClick={()=>route.push("/about")}>
                    <span>ABOUT</span>                   
                    <PersonIcon style={{fontSize:"30px"}}/>
                </li>
                <li className={router === "/contact" && "active-nav-color"} onClick={()=>route.push("/contact")}>
                    <span>CONTACT</span>
                    <DraftsIcon style={{fontSize:"30px"}}/>
                    
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
