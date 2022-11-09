import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import styles from "../styles/components/layout.module.scss";

const Layout = ({ children, categories }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer categories={categories} />
    </>
  );
};

export default Layout;
