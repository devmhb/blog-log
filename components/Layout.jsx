import React from "react";
import { CategoriesProvider } from "../context/CategoriesContext";
import { Navbar, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <CategoriesProvider>
        <Navbar />
        <div style={{ margin: "0 auto", maxWidth: "1480px", width: "100%" }}>
          {children}
        </div>
        <Footer />
      </CategoriesProvider>
    </>
  );
};

export default Layout;
