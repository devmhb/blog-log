import React from "react";
import PopularCard from "./popularCard";
import styles from "../styles/components/popularCards.module.scss";

const PopularCards = () => {
  return (
    <div className={styles.popular_container}>
      <h5 className="feature_month">
        <span>Popular</span> Posted
      </h5>
      <div className={styles.cards_container}>
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};

export default PopularCards;
