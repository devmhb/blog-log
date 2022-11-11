import React from "react";
import { getCategories, getCategory } from "../../service";
import styles from "../../styles/components/categoryDetail.module.scss";
import Head from "next/head";
import Layout from "../../components/layout";
import CategoryPost from "../../components/CategoryPost";

const CategoryDetails = ({ category }) => {
  const { edges: categoryInfo } = category;
  console.log(categoryInfo);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog page" />
      </Head>

      <Layout>
        {categoryInfo.map((category) => (
          <div className={styles.category} key={category.node.id}>
            <div className={styles.category_name}>
              <h1>{category.node.name}</h1>
            </div>

            <div className={styles.posts_container}>
              {category?.node?.posts?.map((post, i) => (
                <CategoryPost post={post} />
              ))}
            </div>
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

  return {
    props: { category },
  };
}
