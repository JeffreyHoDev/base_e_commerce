import styles from './Main.page.module.scss'
import { Link } from 'react-router-dom'

import CustomerSupportIcon from '../../assets/customer-support.svg'
import LorryIcon from '../../assets/lorry.svg'
import TickIcon from '../../assets/tick.svg'
import TwoArrowsIcon from '../../assets/two-arrows.svg'

const MainPage = () => {
    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.mainPageContentContainer}>
                <div className={styles.mainPageDirectoryImageContainer}>
                    <Link to="/shop/mens">
                        <img className={styles.mainPageContentDirectoryImage} src='https://i.ibb.co/R70vBrQ/men.png' alt="men"></img>
                        <div className={styles.mainPageContentDirectoryImageDescription}>Men</div>
                    </Link>
                </div>
                <div className={styles.centerTitle}>
                    It start from <b>YOU</b>
                </div>
                <div className={styles.mainPageDirectoryImageContainer}>
                    <Link to="/shop/womens">
                        <img className={styles.mainPageContentDirectoryImage} src='https://i.ibb.co/GCCdy8t/womens.png' alt="women"></img>
                        <div className={styles.mainPageContentDirectoryImageDescription}>Women</div>
                    </Link>
                </div>
            </div>
            <div className={styles.servicesContainer}>
                <div className={styles.info}><img src={TickIcon} className={styles.icon} alt="Tick icon"/>Quality Product</div>
                <div className={styles.info}><img src={LorryIcon} className={styles.icon} alt="Lorry icon"/>Free Shipping</div>
                <div className={styles.info}><img src={CustomerSupportIcon} className={styles.icon} alt="Customer Support icon"/>24/7 Customer Support</div>
                <div className={styles.info}><img src={TwoArrowsIcon} className={styles.icon} alt="Two Arrows icon"/>14-day Return</div>
            </div>
        </div>
    )
}

export default MainPage