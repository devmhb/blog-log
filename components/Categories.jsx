import React from 'react'
import Category from "./category"
import styles from "../styles/components/categories.module.scss"

const Categories = () => {
  return (
    <div className={styles.categories_con}>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
    </div>
  )
}

export default Categories