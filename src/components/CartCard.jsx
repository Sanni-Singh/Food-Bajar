import { MdDeleteForever } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { useState } from "react";
const CartCard = () => {
    const [foodQuantity,setFoodQuantity] = useState(1);
  return (
    <div className="pt-[130px]  h-[500px]">
        <div className="w-[500px] hover:shadow-[6px_4px_13px_0px_rgba(0,_0,_0,_0.35)] rounded-md flex gap-8 p-4 items-center m-auto">
            <img className="w-[150px] h-[150px] rounded-[50%] bg-cover bg-center" src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=900" alt="" />
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">Pizza</p>
                    <MdDeleteForever style={{color:"red", fontSize:"30px"}}/>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <MdDeliveryDining className="text-red-700"/>
                        <p className="text-gray-600">Free Delivery</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoTimerOutline className="text-red-700"/>
                        <p className="text-gray-600">15-30 mins</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">{foodQuantity * 250}</p>
                    <div className=" rounded-xl px-0 flex gap-3 items-center justify-center">
                    <div onClick={()=> foodQuantity >= 2 ? setFoodQuantity(foodQuantity - 1) : setFoodQuantity(foodQuantity)} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">-</div>
                    <p className="font-bold text-md">{foodQuantity}</p>
                    <div onClick={()=> setFoodQuantity(foodQuantity + 1)} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">+</div>
                    <div/>
                
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard