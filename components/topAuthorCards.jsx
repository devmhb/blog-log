import React from "react";
import { TopAuthorCard } from "../components";
import styles from "../styles/components/topAuthors.module.scss";

const TopAuthorCards = ({ authors }) => {
  const authorInfo = authors?.edges;
  authorInfo.splice(3);
  return (
    <div className={styles.top_authorC_container}>
      <h5>
        <span>Top</span> Authors
      </h5>
      <div className={styles.top_authorC}>
        {authorInfo?.map((author, i) => (
          <TopAuthorCard author={author} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopAuthorCards;
