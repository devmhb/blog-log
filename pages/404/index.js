import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/components/errorpage.module.scss";

const index = () => {
  return (
    <Layout>
      <div className={styles.error_container}>
        <div className={styles.error_items}>
          <h1>404</h1>
          <p>The Page You Are Looking For Does Not Exist!</p>
          <Link href="/">
            <a>← Back to Homepage</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default index;
