import React from 'react'
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className='absolute w-full py-2 px-8 z-10'>
      <div className='max-w-4xl flex justify-between items-center mx-auto'>
        <img src={logo} alt='Logo' className='w-[120px] lg:w-40'/>
      </div>
    </div>
  )
}

export default Header