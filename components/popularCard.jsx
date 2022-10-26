import Image from 'next/image'
import React from 'react'
import styles from "../styles/components/popularCard.module.scss"

const PopularCard = () => {
  return (
    <div className={styles.popularC}>
        <button className={styles.categories}>
            Travel
        </button>
        <h2 className={styles.popularC_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus.</h2>
        <div className={styles.popularC_info}>
            <div className={styles.author}>
                {/* <Image src="" width ="20" height="20" alt='author'/> */}
                <p className={styles.author_name}>Jhony </p>
            </div>
            <p className={styles.date}>02 December 2022</p>
        </div>
        <p className={styles.popularC_desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis hic harum distinctio, praesentium cumque tenetur optio cupiditate necessitatibus vitae earum.</p>
    </div>
  )
}

export default PopularCard