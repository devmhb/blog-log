import React, { useContext } from "react";
import styles from "../styles/components/footer.module.scss";
import Link from "next/link";
import { CategoriesContext } from "./categoriesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const categoriesInfo = useContext(CategoriesContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <h3 className={styles.logo}>BLOG</h3>
        <p className={styles.desc}>
          Did you come here for something in particular or just general Riker
        </p>
      </div>

      <div className={styles.blogsC}>
        <h5>Blogs</h5>
        {categoriesInfo?.map((category, index) => (
          <div className={styles.blogC} key={index}>
            <Link href={`/category/${category.node.slug}`}>
              <a>{category.node.slug}</a>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.quick_linksC}>
        <h5>Quick links</h5>
        <div className={styles.linksC}>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
          <a href="">Terms & conditions</a>
          <a href="">Support</a>
          <a href="">Privacy policy</a>
        </div>
      </div>

      <div className={styles.newsletter}>
        <h5>Subscribe for Newsletter</h5>
        <div className={styles.input_container}>
          <input
            className={styles.email_input}
            type="text"
            placeholder="Your Email"
          />
          <input className={styles.btn} type="button" value="Subscribe" />
        </div>
        <div className={styles.social_links}>
          <h5>Follow On:</h5>
          <Link href="https://www.facebook.com/devmhb/" target="_blank">
            <div className={styles.link}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </Link>

          <Link href="">
            <div className={styles.link}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </Link>

          <Link href="https://www.instagram.com/devmhb/">
            <div className={styles.link}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </Link>
        </div>
      </div>
      <p className={styles.copyrights}>Copyright@2022 devmhb.ALL Reserved </p>
    </footer>
  );
};

export default Footer;
