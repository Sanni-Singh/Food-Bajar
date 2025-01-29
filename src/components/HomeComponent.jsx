import CarouselComponent from "./CarouselComponent"
import { CiSearch } from "react-icons/ci";
import RestaurantsCard from "./RestaurantsCard";
import { useContext, useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "../App";
import ShimmerUi from "./ShimmerUi";
import { useNavigate } from "react-router-dom";
const imgId = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
let arr = [
    {
        id:1,
        img:"https://wallpapers.com/images/hd/pizza-hut-stretching-mozzarella-cheese-53n8lo76csqcvkvb.jpg"
    },
    {
        id:2,
        img:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/01/31122738/Goila-Butter-Chicken.jpg"
    },
    {
        id:3,
        img:"https://img.freepik.com/premium-photo/grilled-paneer-tikka-sandwich-best-indian-fast-food-paneer-tikka-image-photography_1020697-119009.jpg"
    },
    {
        id:4,
        img:"https://todosossantos.nyc/wp-content/uploads/2025/01/baskin-robbins-ice-cream-menu.jpg"
    },
    {
        id:5,
        img:"https://dil-rjcorp.com/wp-content/uploads/2021/05/kfc-banner.webp"
    },
    {
        id:6,
        img:"https://mltwiersgrjj.i.optimole.com/UjSS7Fo-AqOp8t9u/w:412/h:183/q:90/https://menumcdo.com/wp-content/uploads/2025/01/250109-MCDO-SPICY-CHICKEN-MENU-MCDO-BANNER-AH-1.jpg"
    },
    {
        id:7,
        img:"https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/652964/restaurant020180216082423.jpg"
    },
    {
        id:8,
        img:"https://t4.ftcdn.net/jpg/06/95/63/75/360_F_695637532_PJch2K7CmcL9HJV47wOzCnqOkbRvXv7K.jpg"
    },
    {
        id:9,
        img:"https://b.zmtcdn.com/data/pictures/chains/6/20492226/41c4af03c911df59b7838be8c4473145.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        id:10,
        img:"https://i.ytimg.com/vi/dD6vOOEZUp0/maxresdefault.jpg"
    }
]
const apiUrl = import.meta.env.VITE_API_URL;
const HomeComponent = () => {
    const ctx = useContext(UserContext);
    const [restroData , setRestroData] = useState([]);
    const textref = useRef()
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchIngApi = async()=>{
            const data = await fetch(apiUrl);
            const res = await data.json();
            ctx.setRestaurant(res);
        }
        fetchIngApi();
    },[])

    useEffect(()=>{
        if(ctx.restaurant) setRestroData(ctx.restaurant)
    },[ctx.restaurant])
    const sortTheFood=(e)=>{

        if(e.target.value === "Rating : High To Low"){
            let newRes = [...ctx.restaurant];
            newRes.sort((a,b)=>b.avgRating - a.avgRating)
            setRestroData(newRes)
            
        }
        else if(e.target.value === "Rating : Low To High"){
            let newRes = [...ctx.restaurant];
            newRes.sort((a,b)=>a.avgRating - b.avgRating)
            setRestroData(newRes)
        }
        else if(e.target.value === "Most Relevant"){
            let newRes = [...ctx.restaurant];
            setRestroData(newRes)
        }
        
    }
    const filterRestaurant = (e)=>{
        let c = textref.current.value.toLowerCase()
        let newRes = [...ctx.restaurant].filter((ele)=> ele.name.toLowerCase().includes(c));
        
        if(newRes.length === 0)return;
        else setRestroData(newRes)

    }
    const imageNavigateFn=(id)=>{
        navigate(`/restaurant/${id}`)
        
    }

    if(restroData.length === 0) return <ShimmerUi/>
    
  return (
    <div className="w-[100%] xl:pt-[120px] flex flex-col gap-4 pt-[70px]">
        <Carousel  swipeable={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1900} className="xl:w-[1200px] xl:h-[500px] h-[400px] w-[95%] m-auto ">
        {arr.map((ele,idx)=> <div key={idx} style={{ cursor: "pointer" }} onClick={()=> imageNavigateFn(ele.id)}  ><img   className="w-[100%] cursor-pointer xl:h-[500px] h-[400px]"  src={ele.img} alt="" /></div> )}
        </Carousel>
        <div className="xl:w-[90%] w-[96%] m-auto   flex flex-col gap-4 py-4">
            <p className="sm:text-2xl text-xl font-bold">What would you like to order</p>
            <div className="flex gap-2 items-center">
                <CiSearch style={{fontSize:"25px"}}/>
                <input ref={textref} onChange={filterRestaurant} type="text"  className="border rounded-md border-gray-400 outline-none  w-[100%] px-4 py-2" placeholder="Find Your Restaurant..."/>
            </div>
        </div>
        {/* <div className="xl:w-[90%] w-[96%] m-auto">
            <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} className="w-[150px] h-[150px]">
                {arr.map((ele,idx)=> <img key={idx} className="w-[150px] h-[150px] rounded-[50%]" src="https://lh3.googleusercontent.com/YQG84nnjGZo4f9vOkjLnj9PuAyjLDUuanb_JT6BVyRzIMW0kxvIR0HXqFSEHdBPjHFieTWBN6C7G2NTfoY7FsBx4UxA=w1200-rw" alt="" />)}
            </Carousel>
            
        </div> */}
        <hr  className="xl:w-[90%] w-[96%] m-auto border border-gray-400"/>
        <div className="xl:w-[90%] w-[96%] m-auto py-4 flex flex-col gap-4">
            <div className="flex justify-between sm:flex-row flex-col gap-3 items-center">
                <p className="sm:text-2xl text-xl font-bold">Popular Restaurants</p>
                <select onChange={sortTheFood} name="" id="" className="border border-gray-400 px-2 font-bold outline-none py-1">
                    <option value="Most Relevant">Most Relevant</option>
                    {/* <option value="Prize : Hight To Low">Prize : Hight To Low</option>
                    <option value="Prize : Low To High">Prize : Low To High</option> */}
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