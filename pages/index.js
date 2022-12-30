import Head from "next/head";
import styles from "../styles/Home.module.scss";
import {
  FeatureCards,
  TopAuthorCards,
  HomeCategories,
  RecentCards,
  RegularCards,
} from "../components";
import { getAuthors, getCategories, getPosts } from "../service";

export default function Home({ posts, authors, categories }) {
  // console.log(posts);
  return (
    <>
      <Head>
        <title>Blog Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <FeatureCards posts={posts} />
          <RecentCards />
        </div>
      </div>

      <div className={styles.home_bottom_container}>
        <div className={styles.recent}>
          <RegularCards posts={posts} />
        </div>
        <div className={styles.home_bottom_right}>
          <HomeCategories categories={categories} />
          <TopAuthorCards authors={authors} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const authors = await getAuthors();
  const categories = await getCategories();

  return {
    props: { posts, authors, categories },
  };
}
