import React from "react";
import Image from "next/image";
import dummyImg from "../images/circle3003.png";
// import fb from "../images/fb.png"
// import ins from "../images/insta.png"
// import twitter from "../images/twitter.png"
import styles from "../styles/components/topAuthor.module.scss";

const TopAuthorCard = ({ author }) => {
  console.log(author);
  return (
    <div className={styles.top_author_card}>
      <Image
        className={styles.author}
        src={dummyImg}
        width="100%"
        height="100%"
        alt="author"
      />
      <div className={styles.top_author_info}>
        <h3 className={styles.top_author_title}>{author.node.name}</h3>
        <p className={styles.top_author_desc}>{author.node.bio}</p>
        <div className={styles.top_author_links}>
          {/* <Image src={fb} width="" height="" alt="facebook" color='black'/>
                <Image src={twitter} width="" height="" alt="twitter"/>
                <Image src={ins} width="" height="" alt="instagram"/> */}
        </div>
      </div>
    </div>
  );
};

export default TopAuthorCard;
