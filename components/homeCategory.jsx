import React from 'react'
import styles from "../styles/components/homecategory.module.scss"

const HomeCategory = () => {
  return (
        <div className={styles.categories_wrapper}>
            <div className={styles.categories}>
                <p className={styles.category_name}>Lifestyle</p>
                <p className={styles.category_qty}>9</p>
            </div>
    </div>
  )
}

export default HomeCategory