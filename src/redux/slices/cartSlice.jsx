import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, quantity, name, price, maxUser, image, info, users, ram } = action.payload
            const indexProductId = (state.items).findIndex(item => item.id === id)

            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity
            } else {
                state.items.push({ id, quantity, name, price, maxUser, image, info, users, ram })
            }
            localStorage.setItem("cart", JSON.stringify(state.items))

        },
        changeQuantity(state, action) {
            const { id, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.id === id)

            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity
            } else {
                state.items = (state.items).filter(item => item.id !== id)
            }
            localStorage.setItem("cart", JSON.stringify(state.items))
        }
    }
})

export const { addToCart, changeQuantity } = cartSlice.actions
export default cartSlice.reducer
