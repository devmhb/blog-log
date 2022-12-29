import React from "react";
import Image from "next/image";
import styles from "../styles/components/blog.module.scss";
import { useState } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";

const BlogSingle = ({ postDetails }) => {
  // console.log(postDetails);
  const [postDate, setPostDate] = useState();

  const handleDate = (postD) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    setPostDate(new Date(postD).toLocaleDateString([], options));
  };

  return (
    <div className={styles.blog_container}>
      <p className={styles.category_name}>
        {postDetails?.node?.categories[0]?.name}
      </p>
      <h1 className={styles.blog_title}>{postDetails?.node?.title}</h1>
      <div className={styles.blogC_info}>
        {/* <div className={styles.author}>
          <p className={styles.author_name}>
            {postDetails?.node?.author?.name}
          </p>
        </div> */}
        <p
          className={styles.date}
          onLoad={() => handleDate(postDetails?.node?.createdAt)}
        >
          {postDate}
        </p>
      </div>
      {/* <div className={styles.blog_imgC}>
        <Image
          src={postDetails?.node?.featuredImage[0]?.url}
          layout="fill"
          alt="featured image"
        />
      </div> */}
      <div className={styles.post_detials}>
        <RichText content={postDetails?.node?.content?.raw} />
      </div>
      <h3 className={styles.sub_title}></h3>
      <p className={styles.sub_desc}></p>

      <div className={styles.related_postsC}>
        <h2 className={styles.related_post_heading}>
          <span>See related</span> Posts
        </h2>
      </div>
    </div>
  );
};

export default BlogSingle;
