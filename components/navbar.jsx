import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="navitems">
        <li className="navitem">
          <Link href="/">Homepage</Link>
        </li>
        <li className="navitem">
          <Link href="/about">About Us</Link>
        </li>
        <li className="navitem">
          <Link href="/category">Category</Link>
        </li>
      </ul>
      <h1 className="logo">BLOG</h1>
    </nav>
  );
};

export default Navbar;
