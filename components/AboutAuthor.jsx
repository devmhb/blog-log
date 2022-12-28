import React from "react";
import Image from "next/image";
import styles from "../styles/components/about_author.module.scss";
import Link from "next/link";

const AboutAuthor = ({ authors }) => {
  return (
    <>
      <div className={styles.about_authorsC}>
        {authors?.map((author) => (
          <div className={styles.about_authorC} key={author.node.slug}>
            <div className={styles.about_img}>
              <Image
                src={author.node?.photo?.url}
                width="100"
                height="100"
                layout="responsive"
                alt="author"
              />
            </div>
            <div className={styles.about_author_info}>
              <h2 className={styles.author_name}>{author.node.name}</h2>
              <h6 className={styles.posts_qty}>
                {author.node.posts?.length} posts
              </h6>
              <Link href={`/author/${author.node.slug}`}>See details</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutAuthor;
