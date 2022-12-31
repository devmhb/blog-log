import React from "react";
import styles from "../styles/components/blog.module.scss";
import { useState } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RelatedPosts } from "../components";
import Image from "next/image";
import Link from "next/link";

const BlogSingle = ({ postDetails }) => {
  // console.log(postDetails);
  const [postDate, setPostDate] = useState();

  const handleDate = (postD) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    setPostDate(new Date(postD).toLocaleDateString([], options));
  };

  return (
    <div className={styles.blog_container}>
      <div className={styles.blog}>
        <p className={styles.category_name}>
          {postDetails?.node?.categories[0]?.name}
        </p>
        <h1 className={styles.blog_title}>{postDetails?.node?.title}</h1>
        <Link href={`/author/${postDetails.node.author.slug}`}>
          <div className={styles.author}>
            <Image
              src={postDetails.node.author.photo.url}
              width="20"
              height="20"
              alt="author"
              style={{ borderRadius: "50%" }}
            />
            <p className={styles.author_name}>{postDetails.node.author.name}</p>
          </div>
        </Link>
        <div className={styles.blogC_info}>
          <p
            className={styles.date}
            onLoad={() => handleDate(postDetails?.node?.createdAt)}
          >
            {postDate}
          </p>
        </div>
        <div className={styles.post_detials}>
          <RichText content={postDetails?.node?.content?.raw} />
        </div>
      </div>

      <div className={styles.related_postsC}>
        <h2 className={styles.related_post_heading}>
          <span>See related</span> Posts
        </h2>
        <RelatedPosts
          slug={postDetails?.node?.slug}
          categories={postDetails?.node?.categories.map(
            (category) => category.slug
          )}
        />
      </div>
    </div>
  );
};

export default BlogSingle;
