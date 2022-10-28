import React from "react";
import RecentCard from "./recentCard";
import styles from "../styles/components/recentCards.module.scss";

const RecentCards = ({ posts }) => {
  return (
    <div className={styles.recentC_container}>
      <h5 className="feature_month">
        <span>Recently</span> Posted
      </h5>
      <div className={styles.card_container}>
        <RecentCard posts={posts} />
      </div>
    </div>
  );
};

export default RecentCards;
