import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageApi from "./ImageApi";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ImageApi />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
