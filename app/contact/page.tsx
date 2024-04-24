"use client";
import { ColorContext } from "@/Provider/Provider";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useContext } from "react";

interface contactProps {
    
}
 
const contact: React.FC<contactProps> = () => {
    const{color} = useContext(ColorContext)
    return (
        <>
        <Card/>
        <div className="absolute top-20 lg:top-36 left-[3rem] lg:left-[20rem] w-[800px] lg:flex">
            <div className="w-[400px] mt-3 lg:mt-5">
                <motion.h1 
                style={{
                    color
                }}
                className="text-5xl  font-bold leading-[3.5rem]">LET'S MAKE SOMETHING AMAZING!</motion.h1>
                <div className="flex  items-center mt-16">
                    <img src="https://i.pinimg.com/236x/a7/8e/22/a78e2233bfe227464ad3896475b9650d.jpg" alt="" className="w-16 h-16 rounded-full" />
                    <div className="text-white ">
                        <p className="font-semibold text-2xl">Thin Myat Khine</p>
                        <p className="tetx-base">snowyhninthet@gmail.com</p>
                    </div>
                </div>  
            </div>
            <div className="w-[350px] h-[350px] rounded-3xl bg-[#494d5a] lg:mt-0 mt-16 ">
             <input type="text" placeholder="Name" className="w-[300px] h-10 mx-5 px-3 my-4 rounded-full bg-[#C5C8D5] text-white" />
             <input type="text" placeholder="Email" className="w-[300px] h-10 mx-5 px-3 my-4 rounded-full bg-[#C5C8D5] text-white" />
             <textarea name="Message" id="" className="mx-5 px-3 h-[150px] w-[300px] my-2 rounded-lg bg-[#C5C8D5] text-white" > </textarea>
             <button className="w-[150px] h-8 font-semibold ml-24 bg-white rounded-full px-2 py-1">Submit</button>
            </div>
        </div>
        
        </>
      );
}
 
export default contact;