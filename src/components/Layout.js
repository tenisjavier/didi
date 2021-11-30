import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <body className="bg-white">{children}</body>
      <Footer></Footer>
    </>
  );
};

export default Layout;
