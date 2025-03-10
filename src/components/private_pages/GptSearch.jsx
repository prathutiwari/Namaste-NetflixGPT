import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import home_bg from "../../assets/images/home_bg.jpg"

const GptSearch = () => {
     return (
          <>
               <div className='relative'>
                    <img src={home_bg} alt="Netflix Banner" className="absolute w-full min-h-[100vh] h-[-webkit-fill-available] object-cover" />
                    <div className="absolute min-h-[100vh] inset-0 bg-black bg-opacity-60"></div>

                    <div className='relative min-h-screen pt-24 text-center px-10 z-[5]'>
                         <GptSearchBar/>
                         <GptMovieSuggestions/>
                    </div>
               </div>
          </>
          
     )
}

export default GptSearch