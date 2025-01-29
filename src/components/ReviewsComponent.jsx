import { useContext, useEffect, useRef, useState } from "react"
import ReviewCard from "./ReviewCard";
import { UserContext } from "../App";
import ShimmerUi from "./ShimmerUi";

const ReviewsComponent = ()=>{
    const [borderColor , setBorderColor] = useState(false);
    const ctx=  useContext(UserContext);
    const [reviewArr,setReviewArr] = useState([]);
    const messref = useRef();
    useEffect(()=>{
         setReviewArr(ctx.review);
    },[ctx.review])
    const submitReview = ()=>{
        if(messref.current.value === "") return;
        let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
        const obj = {
            name:"Sanni Kumar",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhWrkj9QcQ6Q1uHFaDt0wMVbyG5bZPsOL2HgfoT-eVn0kkzJlR84Eh4nVusO5ZpbfbJU&usqp=CAU",
            date:date,
            rating:4.4,
            mess:messref.current.value,
        }
        const oldArr = [...ctx.review,obj]
        ctx.setReview(oldArr)
        messref.current.value = "";
    }
    return(
        <div className="pt-[130px]  ">
            
            <div className="sm:w-[500px]  w-[95%] m-auto flex flex-col gap-8">
                <h1 className="text-5xl font-bold text-center">Reviews</h1>
                <div className="flex sm:flex-row flex-col gap-3 items-center ">
                    <textarea ref={messref} onClick={()=> setBorderColor(true)} placeholder="Write Feedback " className={`w-[100%] outline-none p-3 rounded-md ${borderColor ?"border-orange-500" : "border-gray-700"} border-b-2 h-[150px]`} />
                    <button onClick={submitReview} className="bg-orange-500 sm:px-6 px-16 w-fit h-fit py-2 rounded-md text-white font-bold cursor-pointer hover:bg-orange-600">Add</button>
                </div>
            </div>
            <div className="flex flex-col pt-[20px] gap-4">
                {reviewArr.map((ele,idx)=><ReviewCard key={idx} {...ele}/> )}
            </div>
        </div>
    )
}
export default  ReviewsComponent