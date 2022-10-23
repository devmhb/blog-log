import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import Blog from "../../components/blog"


const index = () => {
  return (
    <>
    <Head>
            <title>blog</title>
            <meta name="blog" content="blog page" />
    </Head>

    <Layout>
      <Blog/>
    </Layout>
    </>
  )
}

export default index