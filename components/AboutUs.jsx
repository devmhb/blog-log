import React from "react";
import styles from "../styles/components/aboutus.module.scss";
import Image from "next/image";
import AboutAuthor from "./About_Author";

import wordpress from "../images/1_jfdwtvU6V6g99q3G7gq7dQ-removebg-preview 1.png";
import unsplash from "../images/blogger-logo-vector-download-free-11574227208kwyac33kkx-removebg-preview 1.png";
import blogger from "../images/blogger-logo-vector-download-free-11574227208kwyac33kkx-removebg-preview 1.png";
import grammerly from "../images/image_226-removebg-preview 1.png";
import medium from "../images/image_226-removebg-preview 2.png";

const AboutUs = ({ authors }) => {
  return (
    <div className={styles.aboutus_C}>
      <div className={styles.desc_wrapper}>
        <div className={styles.aboutus_desc_sec}>
          <h1 className={styles.about_title}>
            <span> Notebook is a place</span> where you can find your perfect
            blogs
          </h1>
          <p className={styles.about_desc}>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target proactive
            vortals vis-a-vis exceptional results. Compellingly brand emerging
            sources and compelling materials. Globally iterate parallel content
          </p>
          <h3 className={styles.about_stitle}>
            The best ideas can change who we are.
          </h3>
          <p className={styles.about_sdesc}>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365
            catalysts for
          </p>
        </div>

        <div className={styles.featured_on}>
          <h1 className={styles.featured_on_title}>
            <span>We are</span> featured On
          </h1>
          <div className={styles.companies_container}>
            <div className={styles.companies_logo}>
              <Image src={wordpress} height="" width="" alt="wordpress" />
            </div>
            <div className={styles.companies_logo}>
              <Image src={unsplash} height="" width="" alt="wordpress" />
            </div>
            <div className={styles.companies_logo}>
              <Image src={blogger} height="" width="" alt="wordpress" />
            </div>
            <div className={styles.companies_logo}>
              <Image src={grammerly} height="" width="" alt="wordpress" />
            </div>
            <div className={styles.companies_logo}>
              <Image src={medium} height="" width="" alt="wordpress" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about_author}>
        <h1>
          <span>Meet </span>Our Author
        </h1>
        <div className={styles.about_author_card}>
          <div className={styles.card}>
            <AboutAuthor authors={authors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
