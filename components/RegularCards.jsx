import React from "react";
import styles from "../styles/components/regularCards.module.scss";
import { RegularCard } from "../components";

const RegularCards = ({ posts }) => {
  return (
    <div className={styles.recentC_container}>
      <h5 className="feature_month">
        <span>Regularly</span> Posted
      </h5>
      <div className={styles.card_container}>
        <RegularCard posts={posts} />
      </div>
    </div>
  );
};

export default RegularCards;
