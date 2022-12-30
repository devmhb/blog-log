import React from "react";
import styles from "../styles/components/homecategory.module.scss";
import Link from "next/link";

const HomeCategory = ({ category }) => {
  return (
    <Link href={`/category/${category.node.slug}`}>
      <div className={styles.categories_wrapper}>
        <div className={styles.categories}>
          <h4 className={styles.category_name}>{category.node.name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default HomeCategory;
