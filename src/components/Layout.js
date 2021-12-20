import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SmartBanner from "./SmartBanner";
import "../styles/global.css";

// @desc: layout with global header, menu, smartbanner and footer
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <SmartBanner type="drv"></SmartBanner>
      <Footer></Footer>
    </>
  );
};

export default Layout;
