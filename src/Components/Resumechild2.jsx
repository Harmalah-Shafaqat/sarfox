import React from "react";
import Resumechildbutton from "./Resumechildbutton";

export default function Resumechild2() {
  return (
    <div>
      <div className=" bg-[#F8FBFB]  grid md:grid-cols-2 grid-cols-1  mb-14 px-11">
    
{/* ------------working skills----- */}
        <div className="px-5 m-5">
          <h1 className="text-3xl py-10 font-semibold">Working Skills</h1>
          
          <div className="pb-9">
          <div className="flex justify-between text-lg font-semibold text-gray-600">
            <p>Web Design</p>
            <p>90%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[90%] bg-[#FF6464] rounded-2xl " />
          </div>
        </div>

        <div className=" pb-9">
          <div className="flex justify-between  text-lg font-semibold text-gray-600">
            <p>Mobile App</p>
            <p>80%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[80%] bg-[#9272D4] rounded-2xl" />
          </div>
        </div>


        <div className=" pb-9">
          <div className="flex justify-between  text-lg font-semibold text-gray-600">
            <p>Illustrator</p>
            <p>65%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[65%] bg-[#5185D4] rounded-2xl" />
          </div>
        </div>

        <div className=" md:pb-9 pb-4">
          <div className="flex justify-between  text-lg font-semibold text-gray-600">
            <p>Photoshope</p>
            <p>75%</p>
          </div>
          <div className= "bg-[#EDF2F2] rounded-2xl ">
            <hr className="h-2 w-[75%] bg-[#CA56F2] rounded-2xl" />
          </div>
        </div>


        
        </div>
        
    
    {/* -------Knowledge buttons----- */}
        
        <div>
          <h1 className="text-3xl py-10 ml-5 m-5 font-semibold">Knowledges</h1>
    
        <div className="flex flex-wrap pb-10">
      <Resumechildbutton data={{button:"Digital Design"}}/>
      <Resumechildbutton data={{button:"Marketing"}}/>
      <Resumechildbutton data={{button:"Social Media"}}/>
      <Resumechildbutton data={{button:"Print"}}/>
      <Resumechildbutton data={{button:"Time Management"}}/>
      <Resumechildbutton data={{button:"Flexibility"}}/>
      <Resumechildbutton data={{button:"Print"}}/>
      <Resumechildbutton data={{button:"Tours"}}/>
      <Resumechildbutton data={{button:"Travelling"}}/>
      <Resumechildbutton data={{button:"Writting"}}/>
      <Resumechildbutton data={{button:"Games"}}/>
        </div>
      
        </div>

      </div>
    </div>

  );
}