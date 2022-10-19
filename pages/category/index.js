import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

const Category = () => {
  return (
    <>
        <Head>
            <title>Category</title>
            <meta name="description" content="category page" />
        </Head>

        <Layout>
            <h1>Category</h1>
        </Layout>
    </>
  )
}

export default Category