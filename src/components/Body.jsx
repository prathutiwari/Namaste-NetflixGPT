import Browse from './private_pages/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './public_pages/Login'


const Body = () => {

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

     
     return (
          <div>
               <RouterProvider router={appRouter} />
          </div>
     )
}

export default Body