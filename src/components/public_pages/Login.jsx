import React, { useState } from "react"
import Header from "./Header"
import home_bg from "../../assets/images/home_bg.jpg"

const Login = () => {

     const [signUpForm, setSignUpForm] = useState(false)

     const toggleAuthForm = () => {
          setSignUpForm(!signUpForm);
     }
     return (
          <div className="relative w-full">
               <Header />
               <img src={home_bg} alt="Netflix Banner" className="absolute w-full min-h-[100vh] object-cover" />

               {/* Overlay */}
               <div className="absolute min-h-[100vh] inset-0 bg-black bg-opacity-50">
               </div>

               <form className="max-w-[475px] px-[45px] py-4 bg-black bg-opacity-60 relative mx-auto flex flex-col"> 
                    <h1 className="text-white font-bold m-2 text-[32px]">
                         {signUpForm ? 'Sign Up':'Sign In'}
                    </h1>
                    
                    {signUpForm && <input type="text" className="px-2 py-[7px] text-[20px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Full Name"/>}

                    <input type="text" className="px-2 py-[7px] text-[20px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Email Address"/>

                    <input type="password" className="px-2 py-[7px] text-[20px] my-2 w-full bg-[#222] border-white border-[1px] rounded-sm text-white" placeholder="Password"/>
                    
                    <button className="pb-2 pt-1 px-4 mt-5 mb-2 rounded-sm bg-[#e50914] text-white w-full">
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