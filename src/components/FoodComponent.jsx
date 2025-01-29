import ShimmerUi from './ShimmerUi'
import FoodCard from './FoodCard'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import { useParams } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
const FoodComonent = ()=>{
    const [foodArr , setFoodArr] = useState([]);
    const ctx =useContext(UserContext)
    const {id} = useParams();
    
    useEffect(()=>{
        const fetchIngApi = async()=>{
            const data = await fetch(`${apiUrl}/${id}/menu`);
            const res = await data.json();
            ctx.setFoodCard(res)
        }
        fetchIngApi();
    },[])
    // const nameRes = [...ctx.restaurant].filter((ele)=> ele.id === id);
    // console.log(ctx.restaurant);
    useEffect(()=>{
        if(foodArr) setFoodArr(ctx.foodCard)
    },[ctx.foodCard])

    const sortTheFood=(e)=>{

        if(e.target.value === "Rating : High To Low"){
            let newRes = [...ctx.foodCard];
            newRes.sort((a,b)=>b.rating - a.rating)
            setFoodArr(newRes)
            
        }
        else if(e.target.value === "Rating : Low To High"){
            let newRes = [...ctx.foodCard];
            newRes.sort((a,b)=>a.rating - b.rating)
            setFoodArr(newRes)
        }
        else if(e.target.value === "Prize : Hight To Low"){
            let newRes = [...ctx.foodCard];
            newRes.sort((a,b)=>b.price - a.price)
            setFoodArr(newRes)
        }
        else if(e.target.value === "Prize : Low To High"){
            let newRes = [...ctx.foodCard];
            newRes.sort((a,b)=>a.price - b.price)
            setFoodArr(newRes)
        }
        else if(e.target.value === "Most Relevant"){
            let newRes = [...ctx.foodCard];
            setFoodArr(newRes)
        }
    }
    if(foodArr.length === 0) return <ShimmerUi/>
    return(
        <div className='pt-[120px] pb-[50px] w-[95%] m-auto flex flex-col gap-6'>
            <div className='flex justify-between sm:flex-row flex-col items-center'>
                <p className='sm:text-3xl text-2xl font-bold '>You Can Order Food  Here</p>
                <select  onChange={sortTheFood} name="" id="" className="border border-gray-400 px-2 font-bold outline-none py-1">
                    <option value="Most Relevant">Most Relevant</option>
                    <option value="Prize : Hight To Low">Prize : Hight To Low</option>
                    <option value="Prize : Low To High">Prize : Low To High</option>
                    <option value="Rating : High To Low">Rating : High To Low</option>
                    <option value="Rating : Low To High">Rating : Low To High</option>
                </select>
            </div>
            <div className='flex flex-wrap gap-12 items-center justify-center'>
                {foodArr.map((ele)=><FoodCard key={ele.id} {...ele}/> )}
                
            </div>
        </div>
    )
}
export default FoodComonent