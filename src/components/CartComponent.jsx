
const CartComponent = () => {
  return (
    <div className="w-[100%] xl:pt-[120px] pb-[100px] pt-[70px] ">
            <div className="sm:w-[500px] w-[95%] flex flex-col items-center  m-auto">
                <p className="text-3xl font-bold">Your Cart Is Empty</p>
                <img className="w-[100%]  h-[400px] bg-contain bg-center" src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
                <button className="bg-red-600 hover:bg-pink-400 cursor-pointer text-white px-6 py-2 rounded-md">Back To Home</button>
            </div>
    </div>
  )
}

export default CartComponent