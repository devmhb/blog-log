import React from "react";
import styles from "../styles/components/categorypost.module.scss";
import Image from "next/image";
import Link from "next/link";

const CategoryPost = ({ post }) => {
  // console.log(post);
  return (
    <Link href={`/blog/${post?.slug}`}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src={post?.featuredImage[0]?.url}
            width="500"
            height="300"
            alt="post_Img"
          />
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryPost;
