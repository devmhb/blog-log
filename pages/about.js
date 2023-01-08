import React from "react";
import Head from "next/head";
import { AboutUs } from "../components";
import { getAuthors } from "../service";
import { AboutAuthor } from "../components";

const About = ({ authors }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="author page" />
        <meta name="keywords" content="blog" />
      </Head>

      <AboutUs />
      <AboutAuthor authors={authors} />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const { edges: authors } = await getAuthors();

  return {
    props: { authors },
    revalidate: 10,
  };
}
