import React, { useEffect } from 'react'
import Browse from './private_pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './public_pages/Login'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
     const dispatch = useDispatch();

     const appRouter = createBrowserRouter([
          {
               path: "/",
               element: <Login />
          },
          {
               path: "/stream",
               element: <Browse />
          }
     ])

     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(addUser({
                         uid: uid,
                         email: email,
                         name: displayName,
                         photoURL: photoURL
                    }));
               } else {
                    dispatch(removeUser());
               }
          });
     }, [])

     return (
          <div>
               <RouterProvider router={appRouter} />
          </div>
     )
}

export default Body