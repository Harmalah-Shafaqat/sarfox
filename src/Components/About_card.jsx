import React from 'react'

export default function Aboutcard(props) {
  return (
    <div> 
      <div className='flex bg-gray-200 p-4 px-4 pb-6 rounded'>
        <div className='text-red-500 m-2 text-4xl p-2 '>
          {props.icon}
        </div>
        <div className=''>

          <p className='text-black m-2 font-bold text-xl '>
            {props.data.title}
          </p>
          <p className='text-gray-600 font-normal text-base px-2 '>{props.data.head}</p>
        </div>
      </div>

    </div>
  )
}