import styles from './category.page.module.scss'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CategoryItem from '../../components/category_item/category_item.component';

import { getCategoryData } from '../../utils/firebase.util'

const CategoryPage = () => {
    const [categoryItems, setCategoryItems] = useState([])
    let { category } = useParams();
    let navigate = useNavigate();

    // get data from firestore when user navigate here either men category or womens category
    useEffect(() => {
        let getData = async() => {
            let { data } = await getCategoryData(category)
            setCategoryItems(data)
        }
        switch(category){
            case 'mens':
                // fetch from firestore the mens item
                getData()
                break;
            case 'womens':
                // fetch from firestore the womens item
                getData()
                break;
            default:
                return navigate("/")
        }
    }, [category])

    return (
        <div className={styles.categoryPageContainer}>
            <h1>{category.toUpperCase()}</h1>
            <div className={styles.categoryItemsContainer}>
                {
                    categoryItems.map(item => {
                        return (
                            <CategoryItem key={`category-item-${item.id}`} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPage