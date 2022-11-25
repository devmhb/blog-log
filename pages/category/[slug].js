import React from "react";
import { getCategories, getCategory } from "../../service";
import styles from "../../styles/components/categoryDetail.module.scss";
import Head from "next/head";
import CategoryPost from "../../components/Categorypost";

const CategoryDetails = ({ category }) => {
  const categoryInfo = category?.edges;
  // console.log(categoryInfo);

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

          <div className={styles.posts_container}>
            {category?.node?.posts?.map((post, i) => (
              <CategoryPost post={post} key={i} />
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);

  return {
    props: { category },
  };
}
