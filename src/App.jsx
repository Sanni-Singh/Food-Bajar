
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CartComponent from './components/CartComponent'
import HomeComponent from './components/HomeComponent'
import ReviewsComponent from './components/ReviewsComponent'
import LoginComponent from './components/LoginComponent'
import Layout from './components/Layout'

function App() {
  
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
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
