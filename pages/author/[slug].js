import Head from "next/head";
import React from "react";
import AuthorPostCard from "../../components/authorPostCard";
import Image from "next/image";
import Author from "../../images/Rectangle 3039.png";
import styles from "../../styles/components/authorDetails.module.scss";
import Layout from "../../components/layout";
import { getAuthor, getAuthors, getCategories } from "../../service";

const AuthorDetails = ({ author, categories }) => {
  console.log(author);
  const authorInfo = author.edges[0];
  return (
    <>
      <Head>
        <title>{authorInfo.node.name}</title>
      </Head>

      <Layout>
        <div className={styles.author_details}>
          <div className={styles.author_img}>
            <Image
              src={Author}
              height="100%"
              width="100%"
              alt={authorInfo.node.name}
            />
          </div>
          <div className={styles.author_infos}>
            <h1>Hi! I am {authorInfo.node.name}</h1>
            <p className={styles.authorsbio}>{authorInfo.node.bio}</p>
          </div>
        </div>

        <div>
          {authorInfo.node.posts.map((post) => (
            <>
              <AuthorPostCard post={post} author={authorInfo.node.name} />
            </>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default AuthorDetails;

export async function getStaticPaths() {
  const { edges: authors } = await getAuthors();

  return {
    paths: authors.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const author = await getAuthor(params.slug);
  const categories = await getCategories();

  return {
    props: { author, categories },
  };
}
