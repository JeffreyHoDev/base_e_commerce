import styles from './cartLogo.component.module.scss'
import { useSelector } from 'react-redux'
import { getCartQuantities } from '../../redux/selectors/cartSelector'

import CartLogo from '../../assets/cart.png'

const CartLogoComponent = () => {
    const cartQuantities = useSelector(getCartQuantities)
    return (
        <>
            <div className={styles.LogoContainer}>
                <img className={styles.cartLogo} src={CartLogo} alt="cart-logo"/>
                <div className={styles.cartQuantity}>{cartQuantities}</div>
            </div>
        </>
    )
}

export default CartLogoComponent