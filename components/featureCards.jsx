import React from 'react'
import FeatureCard from './featureCard'
import styles from "../styles/components/featureCards.module.scss";

const FeatureCards = () => {
  return (
   <div className={styles.feature_container}>
      <h5 className='feature_month'><span>Featured</span> This Month</h5>
      <div className={styles.cards_container}>
        <FeatureCard/>
        <FeatureCard/>
      </div>
    </div>
  )
}

export default FeatureCards