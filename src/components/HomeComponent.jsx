import CarouselComponent from "./CarouselComponent"
import { CiSearch } from "react-icons/ci";
import RestaurantsCard from "./RestaurantsCard";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
let arr = new Array(6).fill(0)
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
    const data = localStorage?.getItem('userData');
    const userDetails = JSON?.parse(data);
    console.log(userDetails);
    
  return (
    <div className="w-[100%] xl:pt-[120px] flex flex-col gap-4 pt-[70px]">
        <Carousel swipeable={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1900} className="xl:w-[1200px] xl:h-[500px] h-[400px] w-[95%] m-auto ">
        <img className="w-[100%]  xl:h-[500px] h-[400px]"  src="https://lh3.googleusercontent.com/YQG84nnjGZo4f9vOkjLnj9PuAyjLDUuanb_JT6BVyRzIMW0kxvIR0HXqFSEHdBPjHFieTWBN6C7G2NTfoY7FsBx4UxA=w1200-rw" alt="" />
        {arr.map((ele,idx)=> <img key={idx} className="w-[100%]  xl:h-[500px] h-[400px]"  src="https://lh3.googleusercontent.com/YQG84nnjGZo4f9vOkjLnj9PuAyjLDUuanb_JT6BVyRzIMW0kxvIR0HXqFSEHdBPjHFieTWBN6C7G2NTfoY7FsBx4UxA=w1200-rw" alt="" /> )}
        </Carousel>
        <div className="xl:w-[90%] w-[96%] m-auto   flex flex-col gap-4 py-4">
            <p className="sm:text-2xl text-xl font-bold">What would you like to order</p>
            <div className="flex gap-2 items-center">
                <CiSearch style={{fontSize:"25px"}}/>
                <input type="text"  className="border rounded-md border-gray-400 outline-none  w-[100%] px-4 py-2" placeholder="Find Your Food..."/>
            </div>
        </div>
        <div className="xl:w-[90%] w-[96%] m-auto">
            <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} className="w-[150px] h-[150px]">
                {arr.map((ele,idx)=> <img key={idx} className="w-[150px] h-[150px] rounded-[50%]" src="https://lh3.googleusercontent.com/YQG84nnjGZo4f9vOkjLnj9PuAyjLDUuanb_JT6BVyRzIMW0kxvIR0HXqFSEHdBPjHFieTWBN6C7G2NTfoY7FsBx4UxA=w1200-rw" alt="" />)}
            </Carousel>
            
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