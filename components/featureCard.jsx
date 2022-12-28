import React from "react";
import Image from "next/image";
import styles from "../styles/components/featurecard.module.scss";
import Link from "next/link";
import { useState } from "react";

const FeatureCard = ({ posts }) => {
  const postInfo = posts.edges;

  const filteredPosts = postInfo.filter((post) => post.node.featuredPost);

  const [postDate, setPostDate] = useState();

  const handleDate = (postD) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    setPostDate(new Date(postD).toLocaleDateString([], options));
  };

  return (
    <>
      {filteredPosts.map((post, i) => (
        <Link href={`/blog/${post.node.slug}`} key={i}>
          <div className={styles.feature}>
            <p className={styles.categories}>
              {post?.node?.categories[0]?.name}
            </p>
            <h1 className={styles.feature_title}>{post.node.title}</h1>
            <div className={styles.feature_img}>
              <Image
                src={post?.node?.featuredImage[0]?.url}
                width="100"
                height="60"
                alt="img"
                layout="responsive"
              />
            </div>
            <div className={styles.feature_info}>
              <div className={styles.author}>
                {/* <Image src="" width ="20" height="20" alt='author'/> */}
                <p className={styles.author_name}>{post.node.author.name} </p>
              </div>
              <p
                className={styles.date}
                onLoad={() => handleDate(post?.node?.author.createdAt)}
              >
                {postDate}
              </p>
            </div>
            <p className={styles.feature_desc}>{post.node.excerpt}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FeatureCard;
