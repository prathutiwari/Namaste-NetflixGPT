import React, { useState } from 'react'
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleGPTSearch } from '../../utils/gptSlice';


const Navbar = ({userData}) => {
     const [dropdownOpen, setDropdownOpen] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();
     

     const handleLogOut = () => {
          signOut(auth).then(() => {
               
          }).catch((error) => {
               navigate('/error');
          });

     }
     const toggleDropdown = () => {
          setDropdownOpen(!dropdownOpen)
     }

     const handleGPTSearch = () => {
          dispatch(toggleGPTSearch());
     }

     return (
          <div className='flex items-center justify-between'>
               <ul className='flex items-center text-white text-[16px]'>
                    <li className='mx-1 py-2 px-2 cursor-pointer'>Movies</li>
                    <li className='mx-1 py-2 px-2 cursor-pointer'>TV Shows</li>
                    <li className='mx-1 py-2 px-2 cursor-pointer'>New & Popular</li>
                    <li className='mx-1 py-1 px-3 cursor-pointer bg-purple-400 font-semibold rounded-md' onClick={handleGPTSearch}>GPT Search</li>
               </ul>

               <div className='relative'>
                    <div className='flex items-center text-white cursor-pointer' onClick={toggleDropdown}>
                         <img alt='user Icon' src={userData?.photoURL} className='w-5 ml-5' />
                         <i className="fi fi-sr-caret-down pt-2"></i>
                    </div>
                    
                    {
                         dropdownOpen && 
                         <div className='absolute bottom-auto w-[200px] bg-white border shadow-lg right-[-4px]'>
                              <ul className='text-black text-[16px] rounded-md'>
                                   <li className='py-2 px-2'>{userData.name}</li>
                                   <li className='py-2 px-2 cursor-pointer hover:bg-slate-200'>Account</li>
                                   <li className='py-2 px-2 cursor-pointer hover:bg-slate-200'>Help Center</li>
                                   <li className='py-2 px-2 cursor-pointer hover:bg-slate-200' onClick={handleLogOut}>Sign Out</li>
                              </ul>
                         </div>
                    }
                    
               </div>
          </div>
     )
}

export default Navbar