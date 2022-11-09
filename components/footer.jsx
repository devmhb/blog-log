import React from "react";
import styles from "../styles/components/footer.module.scss";
import Link from "next/link";

const Footer = ({ categories }) => {
  const categoriesInfo = categories?.edges;
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
          <div className={styles.blogC} key={category?.node?.name}>
            <Link href={`/category/${category?.node?.slug}`}>
              <a>{category?.node?.name}</a>
            </Link>
            {/* <a href="">Travel</a>
          <a href="">Technology</a>
          <a href="">Lifestyle</a>
          <a href="">Business</a>
          <a href="">Fashion</a> */}
          </div>
        ))}
      </div>

      <div className={styles.quick_linksC}>
        <h5>Quick links</h5>
        <div className={styles.linksC}>
          <Link href="/FAQ">
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
          <i>Facebook</i>
          <i>Twitter</i>
          <i>Pinterest</i>
          <i>Instagram</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
