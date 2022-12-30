import React, { useState } from "react";
import { RecentCard } from "../components";
import { useEffect } from "react";
import { getRecentPosts } from "../service";
import styles from "../styles/components/recentCards.module.scss";

const RecentCards = () => {
  const [recentPosts, setRecentPosts] = useState();
  useEffect(() => {
    getRecentPosts().then((data) => setRecentPosts(data));
  }, []);
  //   console.log(recentPosts);
  return (
    <div className={styles.popular_container}>
      <h5 className="feature_month">
        <span>Recently</span> Posted
      </h5>
      <div className={styles.cards_container}>
        {recentPosts?.map((post) => (
          <RecentCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentCards;
