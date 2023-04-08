export const getCartQuantities = (state) => {
    let { cartItems } = state.cartReducer
    return cartItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
}