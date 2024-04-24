"use client";
import { MotionValue, animate, useMotionValue } from "framer-motion";
import { ReactNode, createContext, useEffect } from "react";

interface ProviderProps {
    children: ReactNode |ReactNode[]
}
export const ColorContext = createContext(
    {} as {
        COLORS: string[]
        color: MotionValue<string>
    }
)
const Provider: React.FC<ProviderProps> = ({children}) => {
    const COLORS = ["#9400FF","#F11A7B","#00DFA2","#F0FF42"]
    const color = useMotionValue(COLORS[0]);
    

    useEffect(()=>{
        animate(color,COLORS,{
            ease:"easeInOut",
            duration:10,
            repeat:Infinity,
            repeatType:"mirror"
        })
    },[])
    return ( 
       <ColorContext.Provider value={{COLORS, color}}>
       
       {children}
       
       </ColorContext.Provider>
     );
}
 
export default Provider;