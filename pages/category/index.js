import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import Categories from "../../components/Categories.jsx"
import { getCategories } from '../../service'


const Category = ({categories}) => {
  return (
    <>
        <Head>
            <title>Category</title>
            <meta name="description" content="category page" />
        </Head>

        <Layout>
            <Categories categories={categories}/>
        </Layout>
    </>
  )
}

export default Category

export async function getStaticProps() {
  const categories = await getCategories()
  return {
    props: {categories}
  }
}

