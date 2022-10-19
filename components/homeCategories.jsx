import React from 'react'
import styles from "../styles/components/homeCategories.module.scss"
import HomeCategory from './homeCategory'

const homeCategories = () => {
  return (
    <div className={styles.home_categories}>
        <h5 className={styles.home_categories}>Categories</h5>
        <div className={styles.home_categories_card}>
            <HomeCategory/>
            <HomeCategory/>
            <HomeCategory/>
            <HomeCategory/>
            <HomeCategory/>
        </div>
    </div>
  )
}

export default homeCategories