import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import AboutUs from '../../components/AboutUs'

const About = () => {
  return (
    <>
        <Head>
            <title>About</title>
            <meta name="description" content="author page" />
            <meta name="keywords" content="blog" />
        </Head>

        <Layout>
            <AboutUs/>
        </Layout>
    </>
  )
}

export default About