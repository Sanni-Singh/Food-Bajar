import { MdDeliveryDining } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const FoodCard = () => {
    const [foodQuantity,setFoodQuantity] = useState(1);
    const [addFav,setAddFav] = useState(false);
  return (
    <div className="w-[350px] rounded-xl hover:shadow-[0px_4px_19px_-9px_rgba(0,_0,_0,_0.7)] flex flex-col gap-8 pb-4">
       <div className="w-[100%] relative">
            <img className="w-[100%] h-[230px] rounded-t-xl" src="https://b.zmtcdn.com/data/pictures/5/20395525/dada8948cca6a79cbe9d6676ae06c93a_o2_featured_v2.jpg?output-format=webp" alt="" />
            <div className={`absolute top-2 left-2 bg-orange-500 p-1 rounded-[50%] ${addFav ? "text-red-600" : "text-white"}`}>
                <FaHeart onClick={()=> setAddFav(!addFav)} style={{fontSize:"25px",cursor:"pointer"}}/>
            </div>
            <div className="absolute top-2 right-[-1px] px-3 rounded-l-xl flex items-center gap-1 bg-white p-1">
                <p className="font-bold">4.2</p>
                <FaStar style={{color:"orange", fontSize:"15px"}}/>
            </div>
            <div className="absolute rounded-xl px-0 flex gap-3 items-center justify-center bg-orange-500 left-1 bottom-2 text-white">
                <div onClick={()=> foodQuantity >= 2 ? setFoodQuantity(foodQuantity - 1) : setFoodQuantity(foodQuantity)} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">-</div>
                <p className="font-bold text-md">{foodQuantity}</p>
                <div onClick={()=> setFoodQuantity(foodQuantity + 1)} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">+</div>
                
            </div>
       </div>
        <div className="flex flex-col px-4 gap-1">
            <p className="font-bold text-xl">Pizza</p>
            <p className="text-gray-500">Prize : 200/serving</p>
            <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                    <IoTimerOutline style={{color:"red"}}/>
                    <p className="text-gray-700">Free Delivery</p>
                </div>
                <div className="flex gap-1 items-center">
                    <MdDeliveryDining style={{color:"red"}}/>
                    <p className="text-gray-700">15-30 mins</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between px-2">
            <button className="bg-orange-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded-md">Add To Card</button>
            <button className="bg-orange-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded-md">Go To Card</button>
        </div>
    </div>
  )
}

export default FoodCard