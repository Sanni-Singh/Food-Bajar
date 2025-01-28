import { createSlice } from "@reduxjs/toolkit";
let iniData = {
    userData:{},
    restaurant:[],
}
const foodSlices = createSlice({
    name :"FOOD",
    initialState:iniData,
    reducers:{
        updateUser:(state,action)=>{
            state.userData = action.payload
        },
        updateRestaurent:(state,action)=>{
            state.restaurant = action.payload
        }
    }
})
// export {updateUser}
export default foodSlices.reducer;