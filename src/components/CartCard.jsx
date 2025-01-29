import { MdDeleteForever } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { UserContext } from "../App";
const CartCard = ({img , name , id,time,prize,quantity,idx,final,setFinal}) => {
    const [foodQuantity,setFoodQuantity] = useState(quantity);
    const ctx = useContext(UserContext)
    const deleteItem=()=>{
        const newArr = [...ctx.cartItem];
        const val = newArr.filter((ele)=> ele.id !== id);
        ctx.setCartItem(val)
    }
    const plus = ()=>{
        setFoodQuantity(foodQuantity + 1)
        setFinal((pre)=> pre + prize)
    }
    const minus = ()=>{
        foodQuantity >= 2 ? setFoodQuantity(foodQuantity - 1) : setFoodQuantity(foodQuantity);
        if(foodQuantity >= 2){
            setFinal((pre)=> pre - prize)
        }
    }
  return (
    <div className="">
        <div className="md:w-[500px] w-[95%] hover:shadow-[6px_4px_13px_0px_rgba(0,_0,_0,_0.35)] rounded-md flex gap-8 p-4 items-center m-auto">
            <img className="w-[150px] h-[150px] rounded-[50%] bg-cover bg-center" src={img} alt="" />
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">{name}</p>
                    <MdDeleteForever className="cursor-pointer" onClick={deleteItem} style={{color:"red", fontSize:"30px"}}/>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <MdDeliveryDining className="text-red-700"/>
                        <p className="text-gray-600">Free Delivery</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoTimerOutline className="text-red-700"/>
                        <p className="text-gray-600">{time} mins</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">{foodQuantity *prize}</p>
                    <div className=" rounded-xl px-0 flex gap-3 items-center justify-center">
                    <div onClick={minus} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">-</div>
                    <p className="font-bold text-md">{foodQuantity}</p>
                    <div onClick={plus} className="bg-yellow-400 cursor-pointer px-2 rounded-[50%] font-bold text-xl ">+</div>
                    <div/>
                
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard