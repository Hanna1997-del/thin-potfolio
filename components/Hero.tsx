"use client"
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import Card from "./Card";
import { easeInOut, motion, useMotionTemplate } from "framer-motion";
import { useContext } from "react";
import { ColorContext } from "@/Provider/Provider";

interface HeroProps {}
const intro1Variants = {
    hidden: {
        opacity:0,
        x: '-100vw'
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
           duratiion:0.3,
           

        }
    }
}



const intro2Variants = {
    hidden: {
        opacity:0,
        x: '100vw'
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            duratiion:0.3,
           delay:1.5
 
         }
    }
}
const Hero: React.FC<HeroProps> = () => {
     const {color} = useContext(ColorContext)
    
  return (
    <>
      <Card />
      <motion.div
       
      className="text-white absolute top-52 lg:top-36 overflow-hidden flex flex-col gap-8 left-[4rem] lg:left-[30rem]">
        <motion.h2 
        variants={intro1Variants}
        initial="hidden"
        animate="visible"
        className=" font-normal text-2xl">Hi,I am</motion.h2>
        <motion.h1 
        style={{
          color
         }}
        variants={intro2Variants}
        initial="hidden"
        animate="visible"
        className=" font-bold text-3xl ml-10">Thin Myat Khine</motion.h1>
        <motion.div 
         
        className="lg:flex items-center  gap-5">
          <p className="font-thin text-lg ">SOFTWARE TESTER </p>
          <FaCircle size={10} className="lg:pt-0 pt-3" />
          <p className="font-thin text-lg pt-5 lg:pt-0">AUTOMATION QA ENGINEER</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
