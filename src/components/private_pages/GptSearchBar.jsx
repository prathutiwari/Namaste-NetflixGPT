import React from 'react';

const GptSearchBar = () => {
     return (
          <div className='max-w-2xl py-3 mx-auto rounded-lg bg-black'>
               <form className='w-[95%] mx-auto flex items-center'>
                    <input type='text' className='px-5 py-[15px] w-full rounded-l-lg text-[18px] text-black font-medium' placeholder='What would you like to watch today?' />
                    <button className='px-8 py-[14.5px] bg-[#e50914] rounded-r-lg rounded-l-[0] font-semibold'>Search</button>
               </form>
          </div>
     )
}

export default GptSearchBar