import React from 'react'

export default function Blogcard(props) {
  return (
    <div>
      <div className={props.data.bg}>
        
        <div className=''>
            <div className='hov h-[18rem] w-[18rem] overflow-hidden'>
            <img src={props.data.src} className='rounded ' alt="" />
            </div>

          <p className='text-gray-500 m-2 font-normal text-base mt-4 '>
            {props.data.title}
          </p>
          <p className='text-black font-semibold text-lg px-2 '>{props.data.para}</p>
        </div>
      </div>

    </div>
  )
}