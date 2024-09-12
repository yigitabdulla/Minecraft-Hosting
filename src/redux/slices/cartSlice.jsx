import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [{productId: 1, quantity: 1, }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action) {
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)

            if(indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity
            }else{
                state.items.push({productId,quantity})
            }
            
        },
        changeQuantity(state,action) {
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)

            if(quantity > 0) {
                state.items[indexProductId].quantity = quantity
            }else{
                state.items = (state.items).filter(item => item.productId !== productId)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
