import styles from './checkout.page.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../redux/selectors/cartSelector'
import { addItemToCart, reduceItemFromCart, removeFromCart } from '../../redux/reducers/cartReducer'

const CheckoutPage = () => {

    const cartItems = useSelector(getCartItems) ?? []
    const totalPrice = useSelector(getTotalPrice)
    const dispatch = useDispatch()

    return (
        <div className={styles.checkoutPageContainer}>
            <h2>Checkout</h2>
            <table className={styles.checkoutItemsContainer}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit Price (SGD)</th>
                        <th>Total Price (SGD)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => {
                            return (
                                <tr key={`checkout-row-${item.name}-${item.id}}`} className={styles.checkoutItem}>
                                    <td className={styles.tableItemImageContainer}><img src={item.imageUrl} alt={`item-${item.id}-${item.name}`}/></td>
                                    <td>{item.name}</td>
                                    <td className={styles.tableItemQuantityContainer}>
                                        <div onClick={() => dispatch(reduceItemFromCart(item))} value="-">-</div>
                                        <div>{item.quantity}</div>
                                        <div onClick={() => dispatch(addItemToCart(item))} value="+">+</div>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td onClick={() => dispatch(removeFromCart(item))}><div className={styles.tableItemRemoveAction}>X</div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2>Total Price: SGD {totalPrice} </h2>
        </div>
    )
}

export default CheckoutPage