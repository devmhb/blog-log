import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Categories from "../../components/Categories.jsx";
import { getCategories } from "../../service";

const Category = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="category page" />
      </Head>

      <Categories categories={categories} />
    </>
  );
};

export default Category;

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: { categories },
  };
}
