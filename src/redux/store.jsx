import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import toastifyReducer from './slices/toastifySlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        toastify: toastifyReducer
    }
})