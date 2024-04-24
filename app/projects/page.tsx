"use client";
import { ColorContext } from "@/Provider/Provider";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useContext } from "react";

interface projectsProps {
    
}
 
const projects: React.FC<projectsProps> = () => {
   const{color} = useContext(ColorContext)
    return ( 
        <>
        <Card/>
        <div className="absolute top-36 left-[3rem] lg:left-[30rem]">
             <h1 className=" text-3xl lg:text-5xl font-bold text-white">Projects Showcase</h1>
             <motion.h3 
              style={{
               color
              }}
             >I can't show projects because of our company.</motion.h3>
             <div className="lg:flex gap-10 mt-8">
             
                <img src="https://i.pinimg.com/236x/48/f6/31/48f631b93e9e1f42318e968e3bd3bb49.jpg" alt="" className="rounded-lg h-[300px]" />
                <img src="https://i.pinimg.com/236x/8b/58/37/8b5837f84b6df9a8f792d7b784d7cdac.jpg" alt="" className="rounded-lg h-[300px] mt-5 lg:mt-0" />
             </div>
        </div>
        </>
     );
}
 
export default projects;