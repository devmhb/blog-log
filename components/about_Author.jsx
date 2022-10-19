import React from 'react'
import Image from 'next/image'
import styles from "../styles/components/about_author.module.scss"
import authorImg from "../images/Rectangle 3039.png"


const AboutAuthor = () => {
  return (
    <div className={styles.about_authorC}>
            <div className={styles.about_img}>
            <Image src={authorImg} width="" height="" alt="author"/>
            </div>
            <div className={styles.about_author_info}>
                <h2 className={styles.author_name}>Maria jenin</h2>
                <h6 className={styles.posts_qty}>20 posts</h6>
                <a className={styles.author_link} href="">See details about author</a>
            </div>
    </div>
  )
}

export default AboutAuthor