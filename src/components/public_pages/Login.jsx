import React, { useRef, useState } from "react"
import Header from "./Header"
import home_bg from "../../assets/images/home_bg.jpg"
import { checkValidData } from "../../utils/validate"

const Login = () => {
     /** Here we can take input vaalue in two ways either using useState hook and set its value to input or other one we are using here is useRef */
     const [signUpForm, setSignUpForm] = useState(false);
     const userName = useRef(null);
     const email = useRef(null);
     const password = useRef(null);
     const [errorMsg, setErrorMsg] = useState(null);

     const handleAuthFormBtnClick = () => {
          // Validate form data
          setErrorMsg(checkValidData(userName.current.value, email.current.value, password.current.value));
          
     }

     const toggleAuthForm = () => {
          setSignUpForm(!signUpForm);
     }
     return (
          <div className="relative w-full min-h-[100vh] flex items-center">
               <Header />
               <img src={home_bg} alt="Netflix Banner" className="absolute w-full min-h-[100vh] object-cover" />

               {/* Overlay */}
               <div className="absolute min-h-[100vh] inset-0 bg-black bg-opacity-60">
               </div>

               <form onSubmit={(e)=> e.preventDefault()} className="sm:w-[475px] px-[45px] py-5 bg-black bg-opacity-60 relative mx-auto flex flex-col"> 
                    <h1 className="text-white font-bold m-2 text-[32px]">
                         {signUpForm ? 'Sign Up':'Sign In'}
                    </h1>
                    
                    {signUpForm && <input type="text" ref={userName} className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Full Name"/>}

                    <input ref={email} type="text" className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Email Address"/>

                    <input ref={password} type="password" className="px-2 py-[7px] text-[16px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Password"/>

                    <p className="text-red-600 text-[14px] font-medium">{errorMsg}</p>

                    <button className="pb-2 pt-1 px-4 mt-5 mb-2 rounded-sm bg-[#e50914] text-white w-full" onClick={handleAuthFormBtnClick}>
                         {signUpForm ? 'Sign Up':'Sign In'}
                    </button>

                    <p className="py-4 text-[18px] text-white cursor-pointer" onClick={toggleAuthForm}>
                         {signUpForm ? 'Already User? Sign In' : 'New to Netflix? Sign Up'}
                    </p>           
               </form>
          </div>
     )
}

export default Login