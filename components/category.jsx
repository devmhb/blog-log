import React from 'react'
import styles from "../styles/components/category.module.scss"
import Image from 'next/image'
import Environment from "../images/Group 2458.png"

const category = () => {
  return (
    <div className={styles.category_container}>
            <div className={styles.category}>
                <div className={styles.icon}>
                    <Image src={Environment} height='' width="" alt="icon"/>
                </div>
                    <h5 className={styles.category_name}>Enviroment & nature</h5>
            </div>
    </div>
  )
}

export default category