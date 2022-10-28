import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import AboutUs from "../../components/AboutUs";
import { getAuthors } from "../../service";
import AboutAuthor from "../../components/about_Author";

const About = ({ authors }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="author page" />
        <meta name="keywords" content="blog" />
      </Head>

      <Layout>
        <AboutUs />
        <AboutAuthor authors={authors} />
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const { edges: authors } = await getAuthors();

  return {
    props: { authors },
  };
}
