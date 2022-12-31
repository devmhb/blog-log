import React from "react";
import styles from "../styles/components/card.module.scss";
import Image from "next/image";
import Link from "next/link";

const Card = ({ post }) => {
  // console.log(post);
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={styles.feature}>
        <div className={styles.feature_img}>
          <Image src={post?.featuredImage[0]?.url} alt="img" layout="fill" />
        </div>
        <p className={styles.categories}>{post?.categories[0]?.name}</p>
        <h1 className={styles.feature_title}>{post.title}</h1>
        <div className={styles.feature_info}>
          <div className={styles.author}>
            <Image
              src={post.author.photo.url}
              width="20"
              height="20"
              alt="author"
              style={{ borderRadius: "50%" }}
            />
            <p className={styles.author_name}>{post.author.name}</p>
          </div>
        </div>
        <p className={styles.feature_desc}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default Card;
