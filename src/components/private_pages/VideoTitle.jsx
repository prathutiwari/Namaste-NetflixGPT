import React from 'react'

const VideoTitle = ({ title, description }) => {
     return (
          <div className='absolute py-4 z-10 left-[5%] top-[25%] text-white'>
               <h1 className='text-[50px] font-bold'>{title}</h1>
               <p className='py-3 text-[18px] w-1/3'>{description}</p>
               <div className='flex mt-3'>
                    <button className='bg-white font-bold text-black px-6 py-2 rounded-lg text-[18px] hover:bg-opacity-80'><i className="fi fi-ss-play mr-1"></i>Play</button>
                    <button className='bg-gray-600 font-bold text-white px-6 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-80 text-[18px] mx-2'><i className="fi fi-bs-info mr-1"></i>Info</button>
               </div>
          </div>
     )
}

export default VideoTitle