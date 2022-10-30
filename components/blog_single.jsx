import React from "react";
import Image from "next/image";
import styles from "../styles/components/blog.module.scss";

import FeatureCard from "./featureCard";

import blogImg from "../images/blog_single img.png";

const BlogSingle = () => {
  return (
    <div className={styles.blog_container}>
      <p className={styles.category_name}>Travel</p>
      <h1 className={styles.blog_title}>
        I Created a Developer Rap Video - Heres What I Learned
      </h1>
      <div className={styles.blogC_info}>
        <div className={styles.author}>
          {/* <Image src="" width ="20" height="20" alt='author'/> */}
          <p className={styles.author_name}>Jhony </p>
        </div>
        <p className={styles.date}>02 December 2022</p>
      </div>
      <div className={styles.blog_imgC}>
        <Image src={blogImg} width="" height="" alt="author" />
      </div>
      <p className={styles.blog_desc}>
        Did you come here for something in particular or just general
        Riker-bashing? And blowing into maximum warp speed, you appeared for an
        instant to be in two places at once. We have a saboteur aboard. We know
        you’re dealing in stolen ore. But I wanna talk about the assassination
        attempt on Lieutenant Worf. Could someone survive inside a transporter
        buffer for 75 years? Fate. It protects fools, little children, and
        ships.
      </p>
      <h3 className={styles.sub_title}>
        I Created a Developer Rap Video - Heres What I Learned
      </h3>
      <p className={styles.sub_desc}>
        Did you come here for something in particular or just general
        Riker-bashing? And blowing into maximum warp speed, you appeared for an
        instant to be in two places at once. We have a saboteur aboard. We know
        you’re dealing in stolen ore. But I wanna talk about the assassination
        attempt
      </p>

      <div className={styles.related_postsC}>
        <h2 className={styles.related_post_heading}>
          <span>See related</span> Posts
        </h2>
        {/* <FeatureCard /> */}
      </div>
    </div>
  );
};

export default BlogSingle;
