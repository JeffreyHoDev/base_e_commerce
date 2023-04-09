import styles from './cartLogo.component.module.scss'
import { useSelector } from 'react-redux'
import { getCartQuantities } from '../../redux/selectors/cartSelector'
import { getLoginUserInfo } from '../../redux/selectors/userSelector'
import CartLogo from '../../assets/cart.png'

import { useNavigate } from 'react-router-dom'

const CartLogoComponent = () => {
    const navigate = useNavigate()
    const cartQuantities = useSelector(getCartQuantities)
    const userData = useSelector(getLoginUserInfo) ?? null

    const navigationHandler = () => {
        if(userData){
            return navigate("/checkout")
        }else {
            return navigate("/login")
        }
    }

    return (
        <>
            <div onClick={navigationHandler} className={styles.LogoContainer}>
                <img className={styles.cartLogo} src={CartLogo} alt="cart-logo"/>
                <div className={styles.cartQuantity}>{cartQuantities}</div>
            </div>
        </>
    )
}

export default CartLogoComponent