import React from "react";
import { getCategories, getCategory, getPosts } from "../../service";
import Head from "next/head";
import Layout from "../../components/layout";

const CategoryDetails = ({ category, posts }) => {
  const { edges: categoryInfo } = category;
  const { edges: postInfo } = posts;
  console.log(categoryInfo);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog page" />
      </Head>

      <Layout>
        {categoryInfo.map((category) => (
          <div>
            <h1>{category.node.name}</h1>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default CategoryDetails;

export async function getStaticPaths() {
  const { edges: category } = await getCategories();
  return {
    paths: category.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  const posts = await getPosts(params.slug);

  return {
    props: { category, posts },
  };
}
