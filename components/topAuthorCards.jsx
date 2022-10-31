import React from "react";
import TopAuthorCard from "./topAuthorCard";
import styles from "../styles/components/topAuthors.module.scss";
import { getAuthors } from "../service";

const TopAuthorCards = ({ authors }) => {
  console.log(authors);
  return (
    <div className={styles.top_authorC_container}>
      <h5>
        <span>Top</span>Authors
      </h5>
      <div className={styles.top_authorC}>
        <TopAuthorCard />
      </div>
    </div>
  );
};

export default TopAuthorCards;

export async function getStaticProps() {
  const authors = await getAuthors();
  console.log(authors);
  return {
    props: { authors },
  };
}
