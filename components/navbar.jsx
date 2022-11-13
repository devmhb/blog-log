import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";
// import { useState } from "react";
const Navbar = () => {
  //   const [dropdown, setDropdown] = useState(false);
  //   const [burger, setBurger] = useState(false);
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.navitems}>
        <li className={styles.navitem}>
          <Link href="/">Homepage</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/category">Category</Link>
        </li>
        {/* <div className="navitem">
          <div className="dropdown_container">
            <div className="selected">
              <span>Pages</span>
            </div>
            <div className="dropdown_menu">
              <li>Contact Us</li>
              <li>FAQ</li>
            </div>
          </div>
        </div> */}
      </ul>

      <div className={styles.burger}>
        <div></div>
      </div>
      <Link href="/">
        <h1 className={styles.logo}>BLOG</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
