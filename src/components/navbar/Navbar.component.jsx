import styles from './Navbar.component.module.scss'
import Logo from '../../assets/logo.png'


import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/reducers/userReducer'

import CartLogoComponent from '../cartLogo/cartLogo.component'

const Navbar = () => {

    const userData = useSelector((state) => {
        let userInfo = state.userReducer.userInfo
        return userInfo
    })

    const dispatch = useDispatch()

    return (
        <div className={styles.navbarComponentContainer}>
            <Link to="/">
                <div className={styles.navbarBrandContainer}>
                    <div className={styles.navbarLogoContainer}>
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className={styles.navbarItem}>Stylish Simple Brand</div>
                </div>
            </Link>
            <div className={styles.navbarActionContainer}>
                <CartLogoComponent />
                {userData ? <div onClick={() => dispatch(logoutUser())}>Logout</div> : <Link to="/login"><div className={styles.navbarItem}>Login</div></Link>}
            </div>
        </div>
    )
}

export default Navbar;