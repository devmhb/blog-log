import React from 'react'
import Image from 'next/image'
import dummyImg from "../images/circle3003.png"
// import fb from "../images/fb.png"
// import ins from "../images/insta.png"
// import twitter from "../images/twitter.png"
import styles from "../styles/components/topAuthor.module.scss"

const TopAuthorCard = () => {
  return (
    <div className={styles.top_author_card}>
        <Image src={dummyImg} width='' height='' alt="author" />
        <div className={styles.top_author_info}>
            <h3 className={styles.top_author_title}>Jenny kia</h3>
            <p className={styles.top_author_desc}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className={styles.top_author_links}>
                {/* <Image src={fb} width="" height="" alt="facebook" color='black'/>
                <Image src={twitter} width="" height="" alt="twitter"/>
                <Image src={ins} width="" height="" alt="instagram"/> */}
            </div>
        </div>
    </div>
  )
}

export default TopAuthorCard