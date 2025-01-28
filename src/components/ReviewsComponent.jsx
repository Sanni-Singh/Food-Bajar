import { useState } from "react"
import ReviewCard from "./ReviewCard";

const ReviewsComponent = ()=>{
    const [borderColor , setBorderColor] = useState(false);
    return(
        <div className="pt-[130px]  ">
            
            <div className="sm:w-[500px]  w-[95%] m-auto flex flex-col gap-8">
                <h1 className="text-5xl font-bold text-center">Reviews</h1>
                <div className="flex sm:flex-row flex-col gap-3 items-center ">
                    <textarea onClick={()=> setBorderColor(true)} placeholder="Write Feedback " className={`w-[100%] outline-none p-3 rounded-md ${borderColor ?"border-orange-500" : "border-gray-700"} border-b-2 h-[150px]`} />
                    <button className="bg-orange-500 sm:px-6 px-16 w-fit h-fit py-2 rounded-md text-white font-bold cursor-pointer hover:bg-orange-600">Add</button>
                </div>
            </div>
            <div className="flex flex-col pt-[20px] gap-4">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
    )
}
export default  ReviewsComponent