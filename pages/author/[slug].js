import Head from "next/head";
import React from "react";
import AuthorPostCard from "../../components/authorPostCard";
import Image from "next/image";
import Author from "../../images/author.jpg";
import styles from "../../styles/components/authorDetails.module.scss";
import { getAuthor, getAuthors } from "../../service";

const AuthorDetails = ({ author }) => {
  const authorInfo = author?.edges[0];
  console.log(authorInfo);
  return (
    <>
      <Head>
        <title>{authorInfo?.node?.name}</title>
      </Head>

      <div className={styles.author_infoC}>
        <div className={styles.author_details}>
          <div className={styles.author_img}>
            <Image
              src={Author}
              height="100%"
              width="100%"
              alt={authorInfo?.node?.name}
            />
          </div>
          <div className={styles.author_infos}>
            <h1>Hi! I am {authorInfo?.node?.name}</h1>
            <p className={styles.authorsbio}>{authorInfo?.node?.bio}</p>
          </div>
        </div>

        <div className={styles.author_postsC}>
          {authorInfo?.node?.posts?.map((post, i) => (
            <div key={i} className={styles.author_posts}>
              <AuthorPostCard post={post} author={authorInfo?.node?.name} />
            </div>
          ))}
        </div>
      </div>
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

  return {
    props: { author },
  };
}
