import React from "react";
import styles from "../styles/components/category.module.scss";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  console.log(category);

  const styling = {
    background: `url('${category?.node?.featuredImage?.url}')`,
    width: "100%",
    height: "100%",
    opacity: "0.9",
    borderRadius: "50%",
  };

  return (
    <Link href={`/category/${category.node.slug}`}>
      <div className={styles.category_container}>
        <div className={styles.category}>
          <div className={styles.image}>
            <Image style={styling} src="" height="100%" width="100%" alt="" />
          </div>
          <h5 className={styles.category_name}>{category.node.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Category;
