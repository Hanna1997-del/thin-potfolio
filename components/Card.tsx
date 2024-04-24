"use client";
import { ColorContext } from "@/Provider/Provider";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect } from "react";

interface CardProps {
    
}
 
const Card: React.FC<CardProps> = () => {
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
            <div className="  relative flex justify-between ">
            {/* <div className="absolute top-1 left-10 ">
            <p className="text-[#B4B4B8]">longitude <span className="text-white">~ 28.6542</span></p>
               <p className="text-[#B4B4B8]">latitude <span className="text-white">- 772373</span></p>
            </div>
            <div className="absolute top-1 right-10">
            <p className="text-[#B4B4B8]">Chrome v119.0.0.0 <span className="text-white">~ Browser</span></p>
            <p className="text-[#B4B4B8]">Window 10 <span className="text-white">- OS</span></p>
            </div> */}
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
            className=" w-[300px] lg:w-[400px] h-[50px] absolute bottom-[20px] lg:bottom-[-10px] px-10 left-[3rem] lg:left-[400px]  bg-[#5C5470] text-white rounded-full">
              <div className="flex justify-around  pt-3 gap-5">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              </div>
            </motion.div>
        </motion.div>
    </div>
     );
}
 
export default Card;