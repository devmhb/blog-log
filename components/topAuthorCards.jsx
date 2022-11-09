import React from "react";
import TopAuthorCard from "./topAuthorCard";
import styles from "../styles/components/topAuthors.module.scss";

const TopAuthorCards = ({ authors }) => {
  const AuthorsInfo = authors?.edges;
  return (
    <div className={styles.top_authorC_container}>
      <h5>
        <span>Top</span>Authors
      </h5>
      <div className={styles.top_authorC}>
        {AuthorsInfo?.map((author, i) => (
          <TopAuthorCard author={author} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopAuthorCards;
