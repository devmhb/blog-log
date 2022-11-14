import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";
import { useState } from "react";
const Navbar = () => {
  //   const [dropdown, setDropdown] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleNavbar = () => {
    setBurger(!burger);
  };

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
      </ul>

      {burger && (
        <ul className={styles.burger_items}>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/category">Category</Link>
          </li>
        </ul>
      )}

      <div className={styles.burger} onClick={handleNavbar}>
        <div></div>
      </div>
      <Link href="/">
        <h1 className={styles.logo}>BLOG</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
