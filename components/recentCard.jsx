import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/components/recentCard.module.scss";
import DummyImg from "../images/Rectangle 2961.png";
import Link from "next/link";

const RecentCard = ({ posts }) => {
  const [postDate, setPostDate] = useState();
  const postInfo = posts.edges;
  // console.log(postInfo);

  const handleDate = (postD) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    setPostDate(new Date(postD).toLocaleDateString([], options));
  };

  return (
    <>
      {postInfo.map((post, i) => (
        <Link href={`/blog/${post.node.slug}`} key={i}>
          <div className={styles.recentC} key={i}>
            <div className={styles.recentC_left}>
              <Image
                src={post?.node?.featuredImage[0]?.url}
                width="100"
                height="100"
                alt="img"
                layout="responsive"
              />
            </div>

            <div className={styles.recentC_right}>
              <button className={styles.categories}>
                {post?.node?.categories[0]?.name}
              </button>
              <h2 className={styles.recentC_title}>{post?.node?.title}</h2>
              <div className={styles.recentC_info}>
                <div className={styles.author}>
                  {/* <Image src="" width ="20" height="20" alt='author'/> */}
                  <p className={styles.author_name}>{post.node.author.name}</p>
                </div>
                <p
                  className={styles.author_name}
                  onLoad={() => handleDate(post?.node?.author.createdAt)}
                >
                  {postDate}
                </p>
              </div>
              <p className={styles.recentC_desc}>{post?.node?.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecentCard;
