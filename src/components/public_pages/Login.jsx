import React, { useRef, useState } from "react"
import home_bg from "../../assets/images/home_bg.jpg"
import { checkValidData } from "../../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import user_Profile from '../../assets/images/user_icon.png'
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import HeaderPrivate from "../private_pages/HeaderPrivate";

const Login = () => {
     /** Here we can take input vaalue in two ways either using useState hook and set its value to input or other one we are using here is useRef */
     const [signUpForm, setSignUpForm] = useState(true);
     const userName = useRef(null);
     const email = useRef(null);
     const password = useRef(null);
     const [errorMsg, setErrorMsg] = useState(null);
     const dispatch = useDispatch();

     const handleAuthFormBtnClick = () => {
          // Validate form data
          const message = checkValidData(userName?.current?.value, email?.current?.value, password?.current?.value)
          setErrorMsg(message);
          if (message) return;

          if (signUpForm) {
               // Sign Up logic
               createUserWithEmailAndPassword(
                    auth,
                    email?.current?.value,
                    password?.current?.value
               )
                    .then((userCredential) => {
                         const user = userCredential.user;
                         updateProfile(user, {
                              displayName: userName?.current?.value,
                              photoURL: user_Profile
                         }).then(() => {
                              const { uid, email, displayName, photoURL } = auth.currentUser;
                              dispatch(addUser({
                                   uid: uid,
                                   email: email,
                                   name: displayName,
                                   photoURL: photoURL
                              }));
                         }).catch((error) => {
                              setErrorMsg(error.message)
                         });
                    })
                    .catch((error) => {
                         const errorCode = error?.code;
                         const errorMessage = error?.message;
                         setErrorMsg(errorCode + ": " + errorMessage);
                    });

          } else {
               // Sign In logic
               signInWithEmailAndPassword(
                    auth,
                    email?.current?.value,
                    password?.current?.value
               )
                    .then((userCredential) => {
                         const user = userCredential.user;
                    })
                    .catch((error) => {
                         const errorCode = error.code;
                         const errorMessage = error?.message;
                         setErrorMsg(errorCode + ": " + errorMessage);
                    });
          }
     }

     const toggleAuthForm = () => {
          setSignUpForm(!signUpForm);
     }
     return (
          <div className="relative w-full min-h-[100vh] flex items-center">
               <HeaderPrivate />
               <img src={home_bg} alt="Netflix Banner" className="absolute w-full min-h-[100vh] h-[-webkit-fill-available] object-cover" />

               {/* Overlay */}
               <div className="absolute min-h-[100vh] inset-0 bg-black bg-opacity-60">
               </div>

               <form onSubmit={(e) => e.preventDefault()} className="sm:w-[475px] px-[45px] py-5 bg-black bg-opacity-60 relative mx-auto flex flex-col">
                    <h1 className="text-white font-bold m-2 text-[32px]">
                         {signUpForm ? 'Sign Up' : 'Sign In'}
                    </h1>

                    {signUpForm && <input type="text" ref={userName} className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Full Name" />}

                    <input ref={email} type="text" className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Email Address" />

                    <input ref={password} type="password" className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Password" />

                    <p className="text-red-600 text-[14px] font-medium">{errorMsg}</p>

                    <button className="pb-2 pt-1 px-4 mt-5 mb-2 rounded-sm bg-[#e50914] text-white w-full" onClick={handleAuthFormBtnClick}>
                         {signUpForm ? 'Sign Up' : 'Sign In'}
                    </button>

                    <p className="py-4 text-[18px] text-white cursor-pointer" onClick={toggleAuthForm}>
                         {signUpForm ? 'Already User? Sign In' : 'New to Netflix? Sign Up'}
                    </p>
               </form>
          </div>
     )
}

export default Login