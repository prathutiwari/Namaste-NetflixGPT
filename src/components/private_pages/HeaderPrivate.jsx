import React, { useEffect } from 'react'
import logo from "../../assets/images/logo.png"
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const HeaderPrivate = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          name: displayName,
          photoURL: photoURL
        }));
        navigate('/stream')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    //  unsubscribe when component is mounted
    return () => unsubscribe();
  }, [])


  return (
    <>
      {
        !user && <div className='absolute top-0 w-full py-2 px-8 z-10'>
          <div className='max-w-4xl flex justify-center sm:justify-start items-center mx-auto'>
            <img src={logo} alt='Logo' className='w-[200px] w- lg:w-40' />
          </div>
        </div>
      }

      {
        user &&
        <div className='py-2 px-8 bg-black bg-opacity-60'>
          <div className='flex items-center justify-between'>
            <img src={logo} alt='Logo' className='w-[120px]' />
            {
              user && <Navbar userData={user} />
            }
          </div>
        </div>
      }
    </>

  )
}

export default HeaderPrivate;