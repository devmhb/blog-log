import React from "react";
import Image from "next/image";
import styles from "../styles/components/topAuthor.module.scss";
import Link from "next/link";

const TopAuthorCard = ({ author }) => {
  // console.log(author);
  return (
    <Link href={`/author/${author.node.slug}`}>
      <div className={styles.top_author_card} key={author}>
        <div className={styles.top_author_card_img}>
          <Image
            className={styles.author}
            src={author?.node?.photo?.url}
            width="100"
            height="100"
            alt="author"
            layout="responsive"
          />
        </div>
        <div className={styles.top_author_info}>
          <h3 className={styles.top_author_title}>{author.node.name}</h3>
          <p className={styles.top_author_desc}>{author.node.bio}</p>
        </div>
      </div>
    </Link>
  );
};

export default TopAuthorCard;
