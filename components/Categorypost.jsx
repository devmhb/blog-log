import React from "react";
import DummyImg from "../images/Rectangle 2961.png";
import styles from "../styles/components/categorypost.module.scss";
import Image from "next/image";

const CategoryPost = ({ post }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <Image src={DummyImg} width="" height="" alt="post_Img" />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default CategoryPost;
