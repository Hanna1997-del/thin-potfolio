"use client";
import { ColorContext } from "@/Provider/Provider";
import clsx from "clsx";

import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface CardProps {
    
}
 
const Card: React.FC<CardProps> = () => {
  const[open,setIsOpen] = useState<boolean>(false)
 
    const{color} = useContext(ColorContext)

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #222831 50% , ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    return ( 
        <div className="w-screen relative grid h-[150vh] lg:h-screen bg-black lg:p-10 p-0 ">
        <motion.div 
         style={{
            backgroundImage
         }}
        className="lg:w-[200vh] w-[70vh] lg:h-[90vh]  relative  bg-[#352F44] lg:rounded-3xl">
            <div className=" hidden relative lg:flex justify-between ">
            <div className="absolute top-2 left-10 ">
            <FaFacebook size={30} className="text-white" />
            </div>
            <div className="absolute top-2 right-10">
            <FaLinkedin  size={30} className="text-white" />
            </div>
            </div>

          

            {/* <div className="  flex justify-between ">
            <div className="absolute bottom-1 left-10">
            <p className="text-[#B4B4B8]">Local Time <span className="text-white">~ 9.12</span></p>
               <p className="text-[#B4B4B8]">Time Spend <span className="text-white">- 00:05</span></p>
            </div>
            <div className="absolute bottom-1 right-10">
            <p className="text-[#B4B4B8]">122.16153.938 <span className="text-white">~ IP</span></p>
            <p className="text-[#B4B4B8]">Yangon,Myanmar <span className="text-white">-Location</span></p>
            </div>
            </div> */}

            <motion.div
              style={{
                border,
                boxShadow
              }}
            className=" w-[300px] lg:w-[400px] h-[50px] hidden lg:flex absolute bottom-[20px] lg:bottom-[-10px] px-10 left-[3rem] lg:left-[400px]  bg-[#5C5470] text-white rounded-full">
              <div className="flex  justify-around  pt-3 gap-5">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              </div>
            </motion.div>

            <div  className="absolute top-[1.7rem] right-[1rem] z-20 cursor-pointer lg:hidden w-full  rounded-full flex  justify-center items-center shadow "
            onClick={() => setIsOpen((pre) => !pre)} >
              <GiHamburgerMenu size={30} className={clsx(open? "text-black " : "text-white ")}  />
              
            </div>
           
             <div className={clsx(
              "fixed flex flex-col items-center gap-2 right-0 z-10 w-[100vw]  h-[85vh] bg-white mt-[-100vh]",
              open && "mt-[0vh]"
             )}>
               <ul className=" flex flex-col mt-28 gap-10 text-3xl font-bold">
               <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
               </ul>
               <div className="flex mt-20 gap-10">
               <FaFacebook size={30} className="text-black" />
               <FaLinkedin  size={30} className="text-black" />
               </div>
             </div>
           
        </motion.div>
    </div>
     );
}
 
export default Card;