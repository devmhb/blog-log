import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import Categories from "../../components/Categories.jsx"


const Category = () => {
  return (
    <>
        <Head>
            <title>Category</title>
            <meta name="description" content="category page" />
        </Head>

        <Layout>
            <Categories/>
        </Layout>
    </>
  )
}

export default Category