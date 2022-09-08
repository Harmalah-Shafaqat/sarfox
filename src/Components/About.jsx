import React from 'react'
import Aboutpic from './images/images/About.jpg'
import { MdPhoneIphone } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import Aboutcard from './About_card'
import {RiContactsBook2Line} from "react-icons/ri"
import {BiPhotoAlbum} from "react-icons/bi"
import {MdPhotoCamera} from "react-icons/md"
import {MdSettingsSuggest} from "react-icons/md"
import {FaCode} from "react-icons/fa"


function About(props) {
   return (
      <div className='bg-white pt-8 pb-8 rounded w-{90%} m-8 '>
         <div className='flex m-8 px-8'>
            <h1 className='text-4xl font-bold mt-2 mx-6 '>About Me</h1>
            <hr className='mt-7 w-44 border border-rose-600  ' />
         </div>
         <div className=' '>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
               <div className='w-full col-span-1 sm:w-96 '>
                  <img src={Aboutpic} alt="" className="h-100 w-full lg:px-6 lg:mx-6 md:w-[80%]sm:w-[100%] mx-auto " />
               </div >
               <div className='col-span-2 px-14'>
                  <h1 className='font-semibold text-3xl  '>Who am i ?</h1>
                  <p className='mt-4 text-gray-600 text-lg'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                  <p className='mt-2 text-gray-600 text-lg'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                  <h1 className='font-semibold text-3xl mt-6 '>Personal Info</h1>
                  <div className='flex flex-wrap mt-4'>
                     <div className='flex bg-white w-64'>
                        <div className='text-red-500  rounded text-2xl m-4 mt-4'><MdPhoneIphone />
                        </div>
                        <div>
                           <p className='text-gray-500 m-2 text-sm'>Phone</p>
                           <p className='font-semibold text-base hover:text-red-600'>+123 456 7890</p>
                        </div>
                     </div>
                     <div className='flex bg-white mt-3 w-64 lg:justify-end'>
                        <div className='text-red-500 rounded text-2xl m-4 mt-4'><ImLocation />
                        </div>
                        <div>
                           <p className='text-gray-500 m-2 text-sm'>Location</p>
                           <p className='font-semibold text-base'>Hongg kong </p>
                        </div>
                     </div>
                     <div className='flex bg-white w-64'>
                        <div className='text-blue-700 rounded text-2xl m-4 mt-4'><AiOutlineMail />
                        </div>
                        <div>
                           <p className='text-gray-500 m-2 text-sm'>Email</p>
                           <p className='font-semibold text-base hover:text-pi-600'>example@mail.com</p>
                        </div>
                     </div>
                     <div className='flex bg-white w-64 lg:justify-end'>
                        
                        <div>
                           <p className='text-gray-500 m-2 text-sm '>Birthday</p>
                           <p className='font-semibold text-base '>May 27,1990</p>
                        </div>
                     </div>
                  </div>
            </div>
               </div>
         </div>
               <div className="mt-12 p-4 mx-4">
                  <h1 className='text-4xl font-semibold mx-6 mb-10 '>What I do!</h1>
         
         <div className=" w-[75vw] mx-auto grid grid-cols-3 gap-10">
         <Aboutcard icon={<RiContactsBook2Line className='text-purple-500'/>} data={{title:"Ui/Ux Design",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>

        <Aboutcard icon={<BiPhotoAlbum className='text-yellow-500'/>} data={{title:"App Development",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>
         
         <Aboutcard icon={<BiPhotoAlbum className='text-blue-500'/>}  data={{title:"Photography",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>
        
         <Aboutcard icon={<MdPhotoCamera className="text-pink-500"/>} data={{title:"Photography",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>
         <Aboutcard icon={<MdSettingsSuggest className="text-pink-500"/>} data={{title:"App Development",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>

         <Aboutcard icon={<FaCode className="text-blue-400"/>} data={{title:"Web Development",
         head:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."}}/>

         </div>
         </div>
         {/* -----------slider------ */}

      
      </div>
   )
}
export default About;