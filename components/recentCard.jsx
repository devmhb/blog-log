import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/components/recentCard.module.scss";

const RecentCard = ({ post }) => {
  //   console.log(post);
  return (
    <Link href={`/blog/${post?.slug}`}>
      <div className={styles.popularC}>
        <button className={styles.categories}>
          {post?.categories[0]?.name}
        </button>
        <h2 className={styles.popularC_title}>{post?.title}</h2>
        <div className={styles.popularC_info}>
          <div className={styles.author}>
            <div className={styles.author_img}>
              <Image src={post.author.photo.url} layout="fill" alt="author" />
            </div>
            <p className={styles.author_name}>{post?.author?.name}</p>
          </div>
        </div>
        <p className={styles.popularC_desc}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default RecentCard;
