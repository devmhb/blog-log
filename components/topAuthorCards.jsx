import React from 'react'
import TopAuthorCard from './topAuthorCard'
import styles from "../styles/components/topAuthors.module.scss"


const TopAuthorCards = () => {
  return (
    <div className={styles.top_authorC_container}>
      <h5><span>Top</span>Authors</h5>
      <div className={styles.top_authorC}>
      <TopAuthorCard/>
      <TopAuthorCard/>
      <TopAuthorCard/>
      <TopAuthorCard/>
      </div>
    </div>
  )
}

export default TopAuthorCards