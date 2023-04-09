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
        },
        reduceItemFromCart(state,action){
            // find the item id
                // reduce quantity by 1
                // check if 0, remove from the cart items
            let { cartItems } = state
            let newCartItems = cartItems.map(cartItem => {
                if(cartItem.id === action.payload.id){
                    cartItem.quantity -= 1
                }
                return cartItem
            })
            state.cartItems = newCartItems.filter(cartItem => cartItem.quantity !== 0)
        },
        removeFromCart(state,action){
            let { cartItems } = state
            state.cartItems = cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
    }
})
export const { addItemToCart, reduceItemFromCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer