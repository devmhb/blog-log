import React from "react";
import styles from "../styles/components/category.module.scss";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  // console.log(category);

  return (
    <Link href={`/category/${category.node.slug}`}>
      <div className={styles.category_container}>
        <div className={styles.category}>
          <div className={styles.image}>
            <Image
              src={category?.node?.featuredImage?.url}
              height="100%"
              width="100%"
              alt=""
            />
          </div>
          <h5 className={styles.category_name}>{category.node.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Category;
