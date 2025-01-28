import { FaStar } from "react-icons/fa";
const imgId = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
const RestaurantsCard = ({id ,name,location,cuisines ,costForTwo, avgRating,deliveryTime, resImageID}) => {
  return (
    <div className="w-[330px] rounded-xl p-3 flex flex-col gap-2 hover:shadow-[0px_4px_19px_-9px_rgba(0,_0,_0,_0.7)] cursor-pointer ">
        <img className="w-[100%]  rounded-xl h-[230px]" src={`${imgId}${resImageID}`} alt="" />
        <div className="flex justify-between">
            <p className="font-bold">{name}</p>
            <div className="flex items-center bg-green-700 px-2 py-[2px] rounded-md text-white gap-1">
                <p>{avgRating}</p>
                <FaStar style={{fontSize:"15px"}}/>
            </div>
        </div>
        <div className="flex justify-between text-gray-500">
            <p className="w-[65%]">{cuisines.join(', ')}</p>
            <p>{costForTwo}</p>
        </div>
        <div className="flex justify-between px-1">
            <p></p>
            <p>{deliveryTime+" mins"}</p>
        </div>
    </div>
  )
}

export default RestaurantsCard