import styles from './Main.page.module.scss'
import { Link } from 'react-router-dom'
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
                <div className={styles.mainPageDirectoryImageContainer}>
                    <Link to="/shop/womens">
                        <img className={styles.mainPageContentDirectoryImage} src='https://i.ibb.co/GCCdy8t/womens.png' alt="women"></img>
                        <div className={styles.mainPageContentDirectoryImageDescription}>Women</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage