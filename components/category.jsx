import React from "react";
import styles from "../styles/components/category.module.scss";
import Image from "next/image";
import Environment from "../images/Group 2458.png";
import Link from "next/link";

const category = ({ category }) => {
  return (
    <Link href={`/category/${category.node.slug}`}>
      <div className={styles.category_container}>
        <div className={styles.category}>
          <div className={styles.icon}>
            <Image src={Environment} height="" width="" alt="icon" />
          </div>
          <h5 className={styles.category_name}>{category.node.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default category;
