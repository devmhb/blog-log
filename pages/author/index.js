import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import AboutUs from "../../components/AboutUs"

const Author = (props) => {
  console.log(props);
  return (
    <>
        <Head>
            <title>Author</title>
            <meta name="description" content="author" />
            <meta name="keywords" content="" />
        </Head>
        
        <Layout>
            <AboutUs/>
        </Layout>
    </>
  )
}

export default Author

export async function getStaticProps({params}) {
  
  return {
    props: {
      name: "Habib",
    }
  }
}