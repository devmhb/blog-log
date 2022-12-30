import React from "react";
import styles from "../styles/components/homeCategories.module.scss";
import { HomeCategory } from "./index";

const homeCategories = ({ categories }) => {
  const categoriesInfo = categories?.edges;
  return (
    <div className={styles.home_categories}>
      <h5 className={styles.home_categories}>Categories</h5>
      <div className={styles.home_categories_card}>
        {categoriesInfo?.map((category, i) => (
          <HomeCategory category={category} key={i} />
        ))}
      </div>
    </div>
  );
};

export default homeCategories;
