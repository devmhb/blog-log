import React from "react";
import { getCategories, getCategory } from "../../service";
import styles from "../../styles/components/categoryDetail.module.scss";
import Head from "next/head";
import { Card } from "../../components";

const CategoryDetails = ({ category }) => {
  const categoryInfo = category?.edges;

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog page" />
      </Head>

      {categoryInfo?.map((category, i) => (
        <div className={styles.category} key={i}>
          <div className={styles.category_name}>
            <h1>{category.node.name}</h1>
          </div>

          <div className="cards">
            {category?.node?.posts?.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryDetails;

export async function getStaticPaths() {
  const { edges: category } = await getCategories();
  return {
    paths: category.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);

  return {
    props: { category },
    revalidate: 10,
  };
}
