import React from "react";
import Seo from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import SmartBanner from "./SmartBanner";
import "../styles/global.css";

// @desc: layout with global header, menu, smartbanner and footer
const Layout = ({ children }) => {
  return (
    <>
      {
        // <noscript>
        //   <iframe
        //     src="https://www.googletagmanager.com/ns.html?id=GTM-PKNGZ5P"
        //     height="0"
        //     width="0"
        //     className="hidden"
        //     title="GTM"
        //   ></iframe>
        // </noscript>
      }
      <Seo></Seo>
      <Header></Header>
      {children}
      <SmartBanner type="drv"></SmartBanner>
      <Footer></Footer>
    </>
  );
};

export default Layout;
