// Get total quantities available in cart
export const getCartQuantities = (state) => {
    let { cartItems } = state.cartReducer
    return cartItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
}

// Get all items in cart
export const getCartItems = (state) => {
    return state.cartReducer.cartItems
}

// Get the total price to be paid in cart items
export const getTotalPrice = (state) => {
    let { cartItems } = state.cartReducer
    return cartItems.reduce((acc, item) => {
        return acc + (item.quantity * item.price)
    }, 0)
}