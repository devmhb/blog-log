import React from 'react'
import Head from 'next/head'
import styles from "../../styles/blog.module.scss"

import Layout from '../../components/layout'
import BlogSingle from "../../components/blog_single"
import TopAuthor from '../../components/topAuthorCards'
import Categories from "../../components/homeCategories"



const Blog = () => {
  return (
    <>
    <Head>
            <title>Blog</title>
            <meta name="blog" content="blog page" />
    </Head>

    <Layout>
      <div className={styles.blog_container}>
          <div className={styles.blog}>
           <BlogSingle/>
          </div>
          <div className={styles.authors_categories}>
              <TopAuthor/>
              <Categories/>
          </div>
      </div>
    </Layout>
    </>
  )
}

export default Blog