import Head from "next/head";
import React from "react";
import AuthorPostCard from "../../components/authorPostCard";
import Layout from "../../components/layout";
import { getAuthor, getAuthors, getCategories } from "../../service";

const AuthorDetails = ({ author, categories }) => {
  const authorInfo = author.edges[0];
  return (
    <>
      <Head>
        <title>{authorInfo.node.name}</title>
      </Head>

      <Layout>
        <h1>{authorInfo.node.name}</h1>

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
