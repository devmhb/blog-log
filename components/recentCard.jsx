import Image from 'next/image'
import React from 'react'
import styles from "../styles/components/recentCard.module.scss"
import DummyImg from "../images/Rectangle 2961.png"

const RecentCard = () => {
  return (
    <div className={styles.recentC}>
      
       <div className={styles.recentC_left}>
       <Image src={DummyImg} alt="img" width='' height=''/>
       </div>

       <div className={styles.recentC_right}>

            <button className={styles.categories}>
                Travel
            </button>
            <h2 className={styles.recentC_title}>Design is the Mix of emotions</h2>
            <div className={styles.recentC_info}>
                <div className={styles.author}>
                    {/* <Image src="" width ="20" height="20" alt='author'/> */}
                    <p className={styles.author_name}>Jhony </p>
                </div>
                <p className={styles.date}>02 December 2022</p>
            </div>
            <p className={styles.recentC_desc}>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
       </div>
    </div>
  )
}

export default RecentCard