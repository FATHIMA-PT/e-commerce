import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {

        wishlistReducer : wishlistSlice,
        cartReducer : cartSlice

    }
})
export default store