"use client"
import profileImg from "../public/img.png"
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useRouter } from "next/navigation";
import Fade from 'react-reveal/Fade';
export default function Home() {
  const router = useRouter();
  return (
    <main >
      <Fade>
       <div className="flex items-center p-2">
          <div className="grid grid-cols-3 container m-auto gap-10">
            <div className="profile col-span-1 max-sm:w-full  max-md:col-span-3 flex items-center justify-center ">
               <Image src={profileImg} alt="Profile" />
            </div>
            <div className="profile-header col-span-2 max-md:col-span-3 flex justify-center items-center">
              <div>
                  <h1>
                    <span style={{color:'#FFB400'}}> __ I'M MILON MONDAL.</span>
                    <br />
                    <span style={{color:'##666666'}} className="text-white"> FULL STACK</span>
                    <br />
                    <span  style={{color:'#FFB400'}}>WEB DEVELOPER</span>                 
                  </h1>
                  <p className="text-white">
                    I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, <br/> I am passionate about building excellent software that improves the lives of those around me.
                  </p>
                  <button className="btn-container" onClick={()=>router.push("/about")}>
                    <span className="text-white">MORE ABOUT ME</span>
                    <span className="arrow-icon" ><ArrowOutwardIcon style={{color:"white", fontSize:"35px"}}/></span>
                  </button>                 
              </div>               
            </div>
          </div>
       </div>
       </Fade>
    </main>
  );
}
