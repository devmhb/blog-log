import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { CategoriesProvider } from "./categoriesContext";

const Layout = ({ children }) => {
  return (
    <>
      <CategoriesProvider>
        <Navbar />
        {children}
        <Footer />
      </CategoriesProvider>
    </>
  );
};

export default Layout;
