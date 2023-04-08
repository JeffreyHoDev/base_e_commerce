import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addItemToCart(state, action){
            // find is it exist with id
                // if exist
                    // add 1 to the existing item
                // if not exist
                    // append to the array the object with quantity 1
            let { cartItems } = state
            let existing = cartItems.find(cartItem => cartItem.id === action.payload.id)
            if(existing){
                state.cartItems = cartItems.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity++
                    }
                    return item
                })
            }else {
                let objectToBeAdded = {...action.payload, quantity: 1}
                state.cartItems.push(objectToBeAdded)
            }
        }
    }
})
export const { addItemToCart } = cartSlice.actions
export default cartSlice.reducer