import styles from './category_item.component.module.scss'

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/reducers/cartReducer'

const CategoryItem = ({ item }) => {
    let dispatch = useDispatch()
    return (
        <div className={styles.categoryItemContainer}>
            <img src={item.imageUrl} alt={`item-${item.id}-${item.name}`}/>
            <div>{item.name}</div>
            <div>SGD {item.price}</div>
            <button onClick={() => dispatch(addItemToCart(item))} className={styles.addCartButton}>Add to Cart</button>
        </div>
    )
}

export default CategoryItem