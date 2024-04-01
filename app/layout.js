
import { Inter } from "next/font/google";
import "./globals.css";
import DarkMood from "@/Component/DarkMood/page";
import Navigation from "@/Component/Navigation/page";

import DarkMoodContainer from "@/Component/DarkMood/page2";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "heymilon.resume",
  description: "Hello, I'm Milon Mondal",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}  style={{backgroundColor:"#111111"}}>
          <div >
              <DarkMoodContainer />
               <div className="grid grid-cols-12 overflow-x-hidden pb-5 container mx-auto">
                  <div className="col-span-12 max-md:col-span-12 max-sm:col-span-12 ">
                    {children}
                  </div>
                  <div className="col-span-0 absolute right-0 overflow-x-hidden max-md:col-span-0 max-sm:col-span-0 flex items-baseline  justify-end h-3/4 max-lg:invisible ">
                       <Navigation  />
                  </div>               
               </div>
               
          </div>
        </body>
    </html>
  );
}
