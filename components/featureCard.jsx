import React from 'react'
import Image from 'next/image'
import DummyImg from "../images/Rectangle 2961.png"
import styles from "../styles/components/featurecard.module.scss"

const featureCard = () => {
  return (
      <div className={styles.feature}>
      <p className={styles.categories}>Travel</p>
      <h1 className={styles.feature_title}>Set Video Playback Speed WIth Javascript</h1>
      <div className={styles.feature_img}>
        <Image src={DummyImg} alt="img" width='' height=''/>
      </div>
      <div className={styles.feature_info}>
        <div className={styles.author}>
          <Image src="" width ="20" height="20" alt='author'/>
          <p className={styles.author_name}>Jhony </p>
        </div>
        <p className={styles.date}>02 December 2022</p>
      </div>
      <p className={styles.feature_desc}>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
    </div>
  )
}

export default featureCard