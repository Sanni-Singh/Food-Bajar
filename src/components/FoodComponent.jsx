import ShimmerUi from './ShimmerUi'
import FoodCard from './FoodCard'
const FoodComonent = ()=>{
    return(
        <div className='pt-[120px] pb-[50px] border border-black w-[95%] m-auto flex flex-col gap-6'>
            <p className='text-3xl font-bold text-center'>Your Search Item</p>
            <div className='flex flex-wrap gap-12 items-center justify-center'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
        </div>
    )
}
export default FoodComonent