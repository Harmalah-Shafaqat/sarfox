import React from 'react'
import cvpic from './images/images/cvpic.jpg'
import {GrFacebookOption} from "react-icons/gr"
import {FaTwitter} from "react-icons/fa"
import {RiGlobalLine} from "react-icons/ri"
import {FaLinkedinIn} from "react-icons/fa"
import down from './images/images/down.png'


export default function Cv() {
  return (
    <div>
        <img src={cvpic} alt="cvpic" className='cvpic h-64 w-64 rounded-full mx-auto' />
        <h1 className='text-center font-bold mt-4 text-3xl'>Monalisa Ashley</h1>
        <p className='text-gray-600 text-center mt-2 text-lg'>Ui/Ux Designer</p>
        <div className='flex justify-around w-60 mx-auto h-8 items-center mt-2 text-lg p-5'>
        <div className=' bg-gray-200  text-blue-800 p-2 rounded hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white'><GrFacebookOption/>
        </div>
        <div className=' bg-gray-200 p-2  text-blue-600 rounded hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white'><FaTwitter/></div>
        <div className=' bg-gray-200 p-2 text-red-500 rounded hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white'><RiGlobalLine/></div>
        <div className=' bg-gray-200 p-2 text-blue-600 rounded hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white'><FaLinkedinIn/></div>
        </div>
        <button className='flex m-auto mt-4
        p-1 hover:bg-gradient-to-r to-[#dd2476] from-[#fa5252] rounded-full px-8 btnhov'>
          <img src={down} alt="" className='m-2' />
          <p className='m-2 font-medium text-white text-base' >Download CV</p>
        </button>

    </div>
  )
}