import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";
import { useState } from "react";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleNavbar = () => {
    setBurger(!burger);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
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
        <div className={styles.dropdown}>
          <li onClick={handleDropdown}>
            Pages <span>↓</span>
          </li>
          {dropdown && (
            <div className={styles.dropdown_items}>
              <li>
                <Link href="/contactus">ContactUs</Link>
              </li>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
            </div>
          )}
        </div>
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
          <div className={styles.dropdown}>
            <li onClick={handleDropdown}>
              Pages <span>↓</span>
            </li>
            {dropdown && (
              <div className={styles.dropdown_items}>
                <li>
                  <Link href="/contactus">ContactUs</Link>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>
              </div>
            )}
          </div>
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
