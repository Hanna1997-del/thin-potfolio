import Card from "@/components/Card";

interface aboutProps {
    
}
 
const about: React.FC<aboutProps> = () => {
    return ( 
        <>
        <Card/>
        <div className="absolute top-36 left-[3rem] lg:left-[30rem]">
           <h1 className="text-5xl font-bold text-white">About</h1>
           <p className=" w-[300px] lg:w-[600px] text-white leading-10 text-l mt-5">I swiftly developed a robust skill set in software testing, covering both manual and automated methodologies. I became proficient in writing comprehensive test cases and gained hands-on experience with tools such as Katalon Studio, Appium, and Selenium for automation. My focus on User Acceptance Testing (UAT) and UI testing using Figma reflects my commitment to delivering high-quality software with a positive user experience. This experience underscores my adaptability, quick learning capacity, and proactive approach to professional development.
           </p>
        </div>
        </>
     );
}
 
export default about;