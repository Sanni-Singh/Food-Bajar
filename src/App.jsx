
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CartComponent from './components/CartComponent'
import HomeComponent from './components/HomeComponent'
import ReviewsComponent from './components/ReviewsComponent'
import LoginComponent from './components/LoginComponent'
import Layout from './components/Layout'
import { createContext, useState } from 'react'
export const UserContext = createContext();
function App() {
  const [user,setUser] = useState({});

  const router = createBrowserRouter([
    {
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<HomeComponent/>
        },
        {
          path:"/reviews",
          element:<ReviewsComponent/>
        },
        {
          path:"/cart",
          element:<CartComponent/>
        },
        
      ]
    }
    ,
    {
      path:"/login",
      element:<LoginComponent/>
    }
  ])
  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
    </>
  )
}

export default App
