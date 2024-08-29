import React from 'react'
import logo from "../../assets/images/logo.png"
import Navbar from './Navbar';

const HeaderPrivate = () => {
  return (
    <div className='py-2 px-8 bg-black bg-opacity-60'>
      <div className='flex items-center justify-between'>
        <img src={logo} alt='Logo' className='w-[120px]'/>
        <Navbar />
      </div>
    </div>
  )
}

export default HeaderPrivate;