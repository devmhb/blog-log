import React from "react";
import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/category">Category</Link>
        </li>
        <div className={styles.dropdown}>
          <li onClick={handleDropdown}>
            Pages
            <span className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </li>
          {dropdown && (
            <div className={styles.dropdown_items}>
              <li onClick={handleDropdown}>
                <Link href="/contact">Contact</Link>
              </li>
              <li onClick={handleDropdown}>
                <Link href="/faq">FAQ</Link>
              </li>
            </div>
          )}
        </div>
      </ul>

      {burger && (
        <ul className={styles.burger_items}>
          <li onClick={handleNavbar}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNavbar}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={handleNavbar}>
            <Link href="/category">Category</Link>
          </li>
          <div className={styles.dropdown}>
            <li onClick={handleDropdown}>
              Pages <span>↓</span>
            </li>
            {dropdown && (
              <div className={styles.dropdown_items}>
                <li onClick={handleNavbar}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li onClick={handleNavbar}>
                  <Link href="/faq">FAQ</Link>
                </li>
              </div>
            )}
          </div>
        </ul>
      )}

      <div
        className={`${styles.humBurger} ${burger ? styles.cross : null} `}
        onClick={handleNavbar}
      >
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </div>
      <Link href="/">
        <h1 className={styles.logo}>
          <span>Blog</span> LOG
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
