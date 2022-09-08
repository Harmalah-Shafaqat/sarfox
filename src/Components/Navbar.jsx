import React from "react";
import {BsList} from "react-icons/bs"
import logo from"./images/images/logo.png"
import {AiOutlineHome} from "react-icons/ai"
import {BsPeople} from "react-icons/bs"
import {TbNotes} from "react-icons/tb"
import {SiVfairs} from "react-icons/si"
import {SiBlogger} from "react-icons/si"
import {RiContactsBook2Line} from "react-icons/ri"
import {Link} from "react-router-dom"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="active text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              href="#pablo"
            >
            <img src={logo} alt="" className="mt-2" />
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BsList/>
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row lg:w-auto w-full
            list-none lg:ml-auto jusitify-between ">

            <Link to="/">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start rounded lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] md:hover:text-[#dd2476] bg-white lg:hover:text-white text-gray-700">
              <div className="mr-2">
              <AiOutlineHome/>
               </div>
               <a href="" className="active">Home</a>
             </li>
             </Link>

            <Link to="/Aboutt">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start rounded text-gray-600 lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-[#dd2476] lg:bg-white lg:hover:text-white">
              <div className="mr-2">
              <BsPeople/>
               </div>
               <a href="">About</a>
             </li>
             </Link>

            <Link to="/Resume">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start rounded text-gray-600 lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-[#dd2476] lg:bg-white lg:hover:text-white">
              <div className="mr-2">
              <TbNotes/>
               </div>
               <a href="">Resume</a>
             </li>
             </Link>

            <Link to="/Works">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between 
             lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] justify-start rounded lg:text-black hover:text-[#dd2476] lg:bg-white lg:hover:text-white md:text-gray-600 ">
              <div className="mr-2">
              <SiVfairs/>
               </div>
               <a href="">Works</a>
             </li>
             </Link>

            <Link to="/Blog">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start rounded text-gray-600 lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-[#dd2476] lg:bg-white lg:hover:text-white">
              <div className="mr-2">
              <SiBlogger/>
               </div>
               <a href="">Blog</a>
             </li>
             </Link>

            <Link to="/Contact">
             <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start rounded text-gray-600 lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-[#dd2476] lg:bg-white lg:hover:text-white">
              <div className="mr-2">
              <RiContactsBook2Line/>
               </div>
               <a href="">Contact</a>
             </li> 
             </Link>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}