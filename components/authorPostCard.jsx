import React from "react";
import styles from "../styles/components/featurecard.module.scss";
import Image from "next/image";
import Link from "next/link";

const AuthorPostCard = ({ post, author }) => {
  // console.log(post);
  // console.log(author);
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={styles.feature}>
        {/* <p className={styles.categories}>Travel</p> */}
        <div className={styles.feature_img}>
          <Image
            src={post?.featuredImage[0]?.url}
            alt="img"
            width="400"
            height="200"
          />
        </div>
        <h1 className={styles.feature_title}>{post.title}</h1>
        <div className={styles.feature_info}>
          <div className={styles.author}>
            {/* <Image src="" width ="20" height="20" alt='author'/> */}
            <p className={styles.author_name}>{author} </p>
          </div>
          <p className={styles.date}>02 December 2022</p>
        </div>
        <p className={styles.feature_desc}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default AuthorPostCard;
