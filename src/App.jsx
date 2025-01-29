
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CartComponent from './components/CartComponent'
import HomeComponent from './components/HomeComponent'
import ReviewsComponent from './components/ReviewsComponent'
import LoginComponent from './components/LoginComponent'
import Layout from './components/Layout'
import FoodComponent from './components/FoodComponent'
import { createContext, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
export const UserContext = createContext();
function App() {
  const [restaurant,setRestaurant] = useState([]);
  const [foodCard , setFoodCard] = useState([]);
  const [cartItem , setCartItem] = useState([]);
  const [review,setReview] = useState([
    {
      name:"Sanni Kumar",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhWrkj9QcQ6Q1uHFaDt0wMVbyG5bZPsOL2HgfoT-eVn0kkzJlR84Eh4nVusO5ZpbfbJU&usqp=CAU",
      date:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      rating:4.4,
      mess:"Delicious, flavorful, mouthwatering, scrumptious, delectable, outstanding, superb, impressive. ",
  },
  {
    name:"Sanni Kumar",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhWrkj9QcQ6Q1uHFaDt0wMVbyG5bZPsOL2HgfoT-eVn0kkzJlR84Eh4nVusO5ZpbfbJU&usqp=CAU",
    date:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    rating:4.4,
    mess:"Delicious, flavorful, mouthwatering, scrumptious, delectable, outstanding, superb, impressive. ",
},
{
  name:"Sanni Kumar",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhWrkj9QcQ6Q1uHFaDt0wMVbyG5bZPsOL2HgfoT-eVn0kkzJlR84Eh4nVusO5ZpbfbJU&usqp=CAU",
  date:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
  rating:4.4,
  mess:"Delicious, flavorful, mouthwatering, scrumptious, delectable, outstanding, superb, impressive. ",
},
{
  name:"Sanni Kumar",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhWrkj9QcQ6Q1uHFaDt0wMVbyG5bZPsOL2HgfoT-eVn0kkzJlR84Eh4nVusO5ZpbfbJU&usqp=CAU",
  date:`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
  rating:4.4,
  mess:"Delicious, flavorful, mouthwatering, scrumptious, delectable, outstanding, superb, impressive. ",
}
  ]);
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
        {
          path:"/restaurant/:id",
          element:<FoodComponent/>
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
    <UserContext.Provider value={{restaurant,setRestaurant,foodCard,setFoodCard,cartItem,setCartItem,review,setReview}}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
      />
    </>
  )
}

export default App
