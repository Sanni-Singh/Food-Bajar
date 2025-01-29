import { FaStar } from "react-icons/fa";

const ReviewCard = ({name,date,img,mess,rating})=>{
    return(
        <div className="xl:w-[800px] w-[95%] border px-4 py-6 rounded-xl shadow-[1px_5px_6px_0px_rgba(0,_0,_0,_0.1)] border-gray-400 border-b-2 flex flex-col gap-4 m-auto">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <div className="w-[40px] h-[40px] rounded-[50%] border border-black">
                        <img className="w-[100%] h-[100%] rounded-[50%]" src={img} alt="" />
                    </div>
                    <div className="flex flex-col  justify-center">
                        <p className="font-bold">{name}</p>
                        <p className="text-gray-500">{date}</p>
                    </div>
                </div>
                 <div className="flex items-center h-fit bg-green-700 px-2 py-[2px] rounded-md text-white gap-1">
                    <p>{rating}</p>
                    <FaStar style={{fontSize:"15px"}}/>
                </div>
            </div>
            <p className="">{mess}</p>
            <hr  className="border border-gray-500"/>
        </div>
    )
}
export default ReviewCard;