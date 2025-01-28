import { useEffect, useState } from "react"
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/img/banner.png'
import { useNavigate } from "react-router-dom";
const HeaderComponent = () => {
    const [logOutButton , setLogOutButton] = useState(false);
    const navigate = useNavigate();
    
  return (
    <div className="w-[100%] fixed bg-white top-0 z-50 flex items-center justify-between md:px-16 px-2 p-2">
        <div>
            <img className="xl:w-[220px] w-[120px]" src={logo} alt="" />
        </div>
        <div className="sm:flex hidden gap-10 text-2xl text-gray-600  font-bold">
            <p onClick={()=>navigate("/")} className="hover:text-orange-600 cursor-pointer">Home</p>
            <p  onClick={()=>navigate("/reviews")} className="hover:text-orange-600 cursor-pointer">Reviwes</p>
            <p onClick={()=>navigate('/cart')} className="hover:text-orange-600 cursor-pointer">Cart</p>
        </div>
        <div className="flex sm:hidden justify-center b items-center sm:gap-16 gap-8 text-2xl">
            <IoMdHome onClick={()=>navigate("/")} className="hover:text-orange-600 cursor-pointer" style={{fontSize:"30px"}}/>
            <MdReviews onClick={()=>navigate("/reviews")}  className="hover:text-orange-600 cursor-pointer" />
            <FaShoppingCart  onClick={()=>navigate('/cart')} className="hover:text-orange-600 cursor-pointer"/>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative">
           <FaUserCircle  className="cursor-pointer hover:text-gray-400" onClick={()=> setLogOutButton(!logOutButton)} style={{fontSize:"40px"}}/>
               {logOutButton &&  <button className="border px-4 absolute top-11 w-[100px] left-[-60px] sm:left-[-20px]  py-1 bg-gray-400 text-white font-bold rounded-md cursor-pointer">Sign out</button>}
           </div>
            <p onClick={()=> navigate('/login')} className="bg-orange-500 hover:bg-orange-700 cursor-pointer hidden sm:flex text-white px-6 py-2 rounded-md font-bold">Login</p>
        </div>
    </div>
  )
}

export default HeaderComponent