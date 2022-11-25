import React from "react";
import Head from "next/head";
import styles from "../../styles/blog.module.scss";
import Layout from "../../components/Layout";
import BlogSingle from "../../components/blog_single";
import TopAuthor from "../../components/topAuthorCards";
import Categories from "../../components/homeCategories";
import { getPostDetails, getPosts } from "../../service";

const Blog = ({ post }) => {
  const postDetails = post?.edges[0];
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog page" />
      </Head>

      <div className={styles.blog_container}>
        <div className={styles.blog}>
          <BlogSingle postDetails={postDetails} />
        </div>
        <div className={styles.authors_categories}>
          <TopAuthor />
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  const { edges: posts } = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug);
  return {
    props: { post },
  };
}
