import React from 'react'
import Blogcard from './Blog_card'
import Pic from "./images/images/boy.jpg"
import Monkey from "./images/images/monkey.jpg"
import Astronaut from "./images/images/astronaut.jpg"
import Watermelon from "./images/images/watermelon.jpg"
import Doggy from "./images/images/doggy.jpg"
import Lion from "./images/images/lion.jpg"

export default function Blog() {
    return (
        <div>
            <div className='bg-white pt-8 rounded w-{90%} m-8 '>
                <div className='flex m-8 px-8'>
                    <h1 className='text-4xl font-bold mt-2 mx-6 '>Blogs</h1>
                    <hr className='mt-7 w-44 border border-rose-600  ' />
                </div>
                <div className=" w-[76vw] mx-auto grid grid-cols-3 gap-10">

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-gray-100", src: Pic, title: "177 April Inspiration",
                        para: "How to Own Your Audience by Creating an Email List."
                    }} />

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-blue-100", src: Monkey, title: "000 April Inspiration",
                        para: "Everything You Need to Know About Web Accessibility.."
                    }} />

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-pink-100", src: Astronaut, title: "21 April Web Design",
                        para: "The window know to say beside you."
                    }} />

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-gray-100", src:Watermelon, title: "177 April Inspiration",
                        para: "Top 10 Toolkits for Deep Learning in 2021."
                    }} />

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-pink-100", src: Doggy, title: "21 April Inspiration",
                        para: "How to Own Your Audience by Creating an Email List."
                    }} />

                    <Blogcard data={{
                        bg: "flex  p-4 px-4 pb-6 rounded bg-blue-100", src: Lion, title: "21 April Inspiration",
                        para: "Everything You Need to Know About Web Accessibility."
                    }} />
                </div>
            <nav className='bg-gray-100 mx-auto mt-10 h-24'>
              <p className='text-center text-gray-700 pt-9 '>© 2022 All Rights Reserved by ib-themes.</p>
            </nav>
        </div>
        </div>

    )
}