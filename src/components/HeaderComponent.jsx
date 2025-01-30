import { useEffect, useState } from "react"
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/img/banner.png'
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const HeaderComponent = () => {
    const [logOutButton , setLogOutButton] = useState(false);
    const [one , setOne] = useState(true);
    const [two , settwo] = useState(false);
    const [three , setThree] = useState(false);
    const[userInfo,setUserInfo] = useState(null)
    const navigate = useNavigate();
    const data = localStorage?.getItem('userData');
    const userDetails = JSON?.parse(data);
    const data1 = localStorage?.getItem('userInformation');
    const userDetails1 = JSON?.parse(data1);
   useEffect(()=>{
    if(userDetails) setUserInfo(userDetails)
    else if(userDetails1) setUserInfo(userDetails1)
   },[])
    const sinOutUser = async()=>{
        const auth = getAuth()
        await signOut(auth);
        localStorage.removeItem('userData')
        localStorage.removeItem('userInformation')
        navigate("/login");
    }
    
    
    
  return (
    <div className="w-[100%] fixed bg-white top-0 z-50 flex items-center justify-between md:px-16 px-2 p-2">
        <div>
            <img className="xl:w-[220px] w-[120px]" src={logo} alt="" />
        </div>
        <div className="sm:flex hidden gap-10 text-2xl text-gray-600  font-bold">
            <p onClick={()=>{
                navigate("/")
                setOne(true);
                setThree(false);
                settwo(false);
                }} className={`${one ? "text-orange-600":"text-gray-600"} cursor-pointer`}>Home</p>
            <p  onClick={()=>{
                navigate("/reviews")
                setOne(false);
                setThree(false);
                settwo(true);
                }} className={`${two ? "text-orange-600":"text-gray-600"} cursor-pointer`}>Reviews</p>
            <p onClick={()=>{
                navigate('/cart')
                settwo(false);
                setOne(false);
                setThree(true)
                }} className={`${three ? "text-orange-600":"text-gray-600"} cursor-pointer`}>Cart</p>
        </div>
        <div className="flex sm:hidden justify-center b items-center sm:gap-16 gap-8 text-2xl">
            <IoMdHome onClick={()=>navigate("/")} className="hover:text-orange-600 cursor-pointer" style={{fontSize:"30px"}}/>
            <MdReviews onClick={()=>navigate("/reviews")}  className="hover:text-orange-600 cursor-pointer" />
            <FaShoppingCart  onClick={()=>navigate('/cart')} className="hover:text-orange-600 cursor-pointer"/>
        </div>
        <div className="flex items-center gap-4">
        <p onClick={()=> navigate('/login')} className="bg-orange-500 hover:bg-orange-700 cursor-pointer hidden xl:flex text-white px-6 py-2 rounded-md font-bold"> {userInfo? `Welcome ${userInfo.displayName}` : "Login"}</p>
           <div className="relative">
           {!userInfo ? <FaUserCircle className="cursor-pointer hover:text-gray-400" onClick={()=> {setLogOutButton(!logOutButton); navigate('/login')}} style={{fontSize:"40px"}}/> : <img onClick={()=> setLogOutButton(!logOutButton)} className="w-[40px] h-[40px] cursor-pointer rounded-[50%]" src={userInfo?.imageUrl ? userInfo?.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaB6fCeyRHwdk4S08O9vYcI2k-YPXdXbFd5w&s"}/>}
               {logOutButton && userInfo &&  <button onClick={sinOutUser} className="border px-4 absolute top-11 w-[100px] left-[-60px] sm:left-[-20px]  py-1 bg-gray-400 text-white font-bold rounded-md cursor-pointer">Sign out</button>}
           </div>
            
        </div>
    </div>
  )
}

export default HeaderComponent