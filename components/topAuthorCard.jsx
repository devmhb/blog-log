import React from "react";
import Image from "next/image";
import styles from "../styles/components/topAuthor.module.scss";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopAuthorCard = ({ author }) => {
  // console.log(author);
  return (
    <Link href={`/author/${author.node.slug}`}>
      <div className={styles.top_author_card} key={author}>
        <div className={styles.top_author_card_img}>
          <Image
            className={styles.author}
            src={author?.node?.photo?.url}
            width="100"
            height="100"
            alt="author"
            layout="responsive"
          />
        </div>
        <div className={styles.top_author_info}>
          <h3 className={styles.top_author_title}>{author.node.name}</h3>
          <p className={styles.top_author_desc}>{author.node.bio}</p>
          <div style={{ display: "flex", gap: "6px" }}>
            {author?.node?.facebook && (
              <a href={author?.node?.facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  width="20"
                  style={{ cursor: "pointer" }}
                />
              </a>
            )}
            {author?.node?.instagram && (
              <a
                href={author?.node?.instagram}
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
            {author?.node?.twitter && (
              <a href={author?.node?.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  width="20"
                  style={{ cursor: "pointer" }}
                />
              </a>
            )}
            {author?.node?.linkedin && (
              <a href={author?.node?.linkedin} target="_blank" rel="noreferrer">
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
    </Link>
  );
};

export default TopAuthorCard;
