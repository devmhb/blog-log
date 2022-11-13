import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/components/errorpage.module.scss";

const index = () => {
  return (
    <Layout>
      <div className={styles.error_container}>
        <div className={styles.error_items}>
          <h1>404</h1>
          <p>The page you are looking for does not exist!</p>
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default index;
