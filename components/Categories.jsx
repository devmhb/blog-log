import React from "react";
import Category from "./Category";
import styles from "../styles/components/categories.module.scss";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className={styles.categories_con}>
      {categories.edges.map((category, i) => (
        <Category category={category} key={i} />
      ))}
    </div>
  );
};

export default Categories;
