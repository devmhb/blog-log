import React from "react";
import Image from "next/image";
import DummyImg from "../images/Rectangle 2961.png";
import styles from "../styles/components/featurecard.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

const featureCard = ({ posts }) => {
  const postInfo = posts.edges;

  const filteredPosts = postInfo.filter((post) => post.node.featuredPost);

  const [postDate, setPostDate] = useState();
  const handleDate = (postD) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    useEffect(() => {
      setPostDate(new Date(postD).toLocaleDateString([], options));
    }, [postDate]);
  };

  return (
    <>
      {filteredPosts.map((post) => (
        <Link href={`/blog/${post.node.slug}`}>
          <div className={styles.feature} key={post.node.slug}>
            <p className={styles.categories}>
              {post?.node?.categories[0]?.name}
            </p>
            <h1 className={styles.feature_title}>{post.node.title}</h1>
            <div className={styles.feature_img}>
              <Image src={DummyImg} alt="img" width="" height="" />
            </div>
            <div className={styles.feature_info}>
              <div className={styles.author}>
                {/* <Image src="" width ="20" height="20" alt='author'/> */}
                <p className={styles.author_name}>{post.node.author.name} </p>
              </div>
              <p
                className={styles.date}
                onLoad={handleDate(post?.node?.author.createdAt)}
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

export default featureCard;
