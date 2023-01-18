import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/components/authorDetails.module.scss";
import { getAuthor, getAuthors } from "../../service";
import { Card } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AuthorDetails = ({ author }) => {
  const authorInfo = author?.edges[0];
  // console.log(authorInfo);
  return (
    <>
      <Head>
        <title>{authorInfo?.node?.name}</title>
      </Head>

      <div className={styles.author_infoC}>
        <div className={styles.author_details}>
          <div className={styles.author_img}>
            <Image
              src={authorInfo?.node?.photo?.url}
              height="100"
              width="100"
              alt={authorInfo?.node?.name}
            />
          </div>
          <div className={styles.author_infos}>
            <h1>Hi! I am {authorInfo?.node?.name}</h1>
            <p className={styles.authorsbio}>{authorInfo?.node?.bio}</p>
            <p className={styles.authorsbio}>{authorInfo?.node?.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              {authorInfo?.node?.facebook && (
                <a
                  href={authorInfo?.node?.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    width="20"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              )}
              {authorInfo?.node?.instagram && (
                <a
                  href={authorInfo?.node?.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    width="20"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              )}
              {authorInfo?.node?.twitter && (
                <a
                  href={authorInfo?.node?.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    width="20"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              )}
              {authorInfo?.node?.linkedin && (
                <a
                  href={authorInfo?.node?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    width="20"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="cards">
          {authorInfo?.node?.posts?.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AuthorDetails;

export async function getStaticPaths() {
  const { edges: authors } = await getAuthors();

  return {
    paths: authors.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const author = await getAuthor(params.slug);

  return {
    props: { author },
  };
}
