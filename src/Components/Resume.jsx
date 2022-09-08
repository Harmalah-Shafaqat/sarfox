import React from 'react'
import {MdOutlineSchool} from "react-icons/md";
import Resumechild1 from './Resumechild1';
import {VscBriefcase} from "react-icons/vsc"
import {FaAward} from "react-icons/fa"
import Resumechild2 from './Resumechild2';
import RightsReserved from './Rightsreserved'

export default function Resume() {
    return (
        <div>
      <div className='lg:container mx-auto  bg-white pt-14 rounded-2xl pb-1 mb-14'>
        
        <div className='flex items-center lg:mx-20 md:mx-10 mx-8'>
          <h1 className='text-4xl font-bold '>Resume</h1>
          <hr className='h-[3px] invisible md:visible  bg-gradient-to-r from-[#fa5252] to-[#dd2476] w-[17%] ml-6' />
        </div>

      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 bg-white gap-x-6  pb-10 pt-14 lg:mx-20 md:mx-10 mx-8'>
          
          {/* -----Education----- */}
        <div>
        <Resumechild1 data={{val:1,icon:<MdOutlineSchool/>,color:"bg-[#FFF4F4]",title1:"Education",title2:"2021-2023",title3:"Ph.D in Horriblensess",title4:"ABC University, Los Angeles, CA"}}/>
        <Resumechild1 data={{color:"bg-[#FFF4F4]",title2:"2019 - Present",title3:"Sr. Software Tester",title4:"Google Inc."}}/>
        <Resumechild1 data={{color:"bg-[#FFF4F4]",title2:"2021",title3:"Best Developer",title4:"University Of Melbourne, NA"}}/>
        </div>
        
        {/* -----Experience---- */}
        
        <div className='md:pt-0 pt-7'>
        <Resumechild1 data={{val:1,icon:<VscBriefcase/>,color:"bg-[#EEF5FA]",title1:"Experience",title2:"2017-2021",title3:"Computer Science",title4:"Imperialize Technical Institute"}}/>
        <Resumechild1 data={{color:"bg-[#EEF5FA]",title2:"2015-2017",title3:"Cr. Web Developer",title4:"ib-themes ltd."}}/>
        <Resumechild1 data={{color:"bg-[#EEF5FA]",title2:"2008",title3:"Best Writter",title4:"Online Typodev Soluation Ltd."}}/>
        </div>

        {/* -----Awards---- */}
        
        <div className='lg:pt-0 pt-7'>
        <Resumechild1 data={{val:1,icon:<FaAward/>,color:"bg-[#FCF4FF]",title1:"Awards",title2:"2015-2017",title3:"Graphic Designer",title4:"Web Graphy, Los Angeles, CA"}}/>
        <Resumechild1 data={{color:"bg-[#FCF4FF]",title2:"2014 - 2015",title3:"Jr. Web Developer",title4:"Creative Gigs."}}/>
        <Resumechild1 data={{color:"bg-[#FCF4FF]",title2:"2015-2017",title3:"Best Freelancer",title4:"Fiver & Upwork Level 2 & Top Rated"}}/>
        </div>
        </div>
      
      
      <Resumechild2/>
      <RightsReserved data={{color:"bg-white"}} />
      </div>
    </div>
    )
}