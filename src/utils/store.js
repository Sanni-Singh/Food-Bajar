import { configureStore } from "@reduxjs/toolkit";
import foodSlices from "../slices/foodSlices";

const store = configureStore({
    
    reducer:{
        Foood :foodSlices
    }
})
export default store