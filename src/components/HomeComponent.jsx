import CarouselComponent from "./CarouselComponent"
import { CiSearch } from "react-icons/ci";
import RestaurantsCard from "./RestaurantsCard";
import { useEffect, useState } from "react";
const HomeComponent = () => {
    const [restroData , setRestroData] = useState([]);

    // useEffect(()=>{
    //     const fetchIngApi = async()=>{
    //         const data = await fetch("https://food-api-render.onrender.com/restaurants/6/menu/");
    //         const res = await data.json();
    //         console.log(res);
    //         setRestroData(res);
    //     }
    //     console.log('hellow');
        
    //     fetchIngApi();
    // },[])
  return (
    <div className="w-[100%] xl:pt-[120px] flex flex-col gap-4 pt-[70px]">
        <div>
            <CarouselComponent/>
        </div>
        <div className="xl:w-[90%] w-[96%] m-auto   flex flex-col gap-4 py-4">
            <p className="sm:text-2xl text-xl font-bold">What would you like to order</p>
            <div className="flex gap-2 items-center">
                <CiSearch style={{fontSize:"25px"}}/>
                <input type="text"  className="border rounded-md border-gray-400 outline-none  w-[100%] px-4 py-2" placeholder="Find Your Food..."/>
            </div>
        </div>
        <hr  className="xl:w-[90%] w-[96%] m-auto border border-gray-400"/>
        <div className="xl:w-[90%] w-[96%] m-auto py-4 flex flex-col gap-4">
            <div className="flex justify-between sm:flex-row flex-col gap-3 items-center">
                <p className="sm:text-2xl text-xl font-bold">Popular Restaurants</p>
                <select name="" id="" className="border border-gray-400 px-2 font-bold outline-none py-1">
                    <option value="Most Relevant">Most Relevant</option>
                    <option value="Prize : Hight To Low">Prize : Hight To Low</option>
                    <option value="Prize : Low To High">Prize : Low To High</option>
                    <option value="Rating : High To Low">Rating : High To Low</option>
                    <option value="Rating : Low To High">Rating : Low To High</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 ">
            {restroData && 
                
                restroData.map((ele)=> <RestaurantsCard
                key={ele.id}
                {...ele}
                />)
            }
            </div>
        </div>
    </div>
  )
}

export default HomeComponent