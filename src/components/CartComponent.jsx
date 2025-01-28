import { useNavigate } from "react-router-dom"
import CartCard from './CartCard'
const CartComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] xl:pt-[120px] pb-[100px] pt-[70px] flex flex-col gap-4 ">
            <div className="sm:w-[500px]  w-[95%] flex hidden flex-col items-center  m-auto">
                <p className="text-3xl font-bold">Your Cart Is Empty</p>
                <img className="w-[100%]  h-[400px] bg-contain bg-center" src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
                <button onClick={()=> navigate("/")} className="bg-red-600 hover:bg-pink-400 cursor-pointer text-white px-6 py-2 rounded-md">Back To Home</button>
            </div>
            <p className="text-5xl text-orange-600 font-bold  text-center">Your Cart</p>
            <div className="flex flex-col gap-2 w-[100%] ">
              <CartCard/>
              <CartCard/>

              <div className=" flex flex-col gap-6 md:w-[700px] w-[95%] m-auto">
                  <div className="flex justify-between">
                    <p></p>
                    <p className="text-2xl font-bold">Total: 1250</p>
                  </div>
                  <div className="flex justify-around">
                    <button className="bg-red-700 hover:bg-orange-600  px-4 py-2 rounded-md text-white cursor-pointer font-bold">Clear Cart</button>
                    <button className="bg-red-700 hover:bg-orange-600 px-4 py-2 rounded-md text-white cursor-pointer font-bold">Process to Payment</button>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default CartComponent