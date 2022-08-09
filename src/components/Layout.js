import React from "react";
import { useLocation } from "@reach/router";
import Seo from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import SmartBanner from "./SmartBanner";
import "../styles/global.css";

// @desc: layout with global header, menu, smartbanner and footer
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  let smartBannerType = "drv";
  if (pathname.includes("food")) smartBannerType = "foodEater";
  if (pathname.includes("food/store")) smartBannerType = "foodBusiness";
  if (pathname.includes("food/delivery")) smartBannerType = "foodDelivery";
  if (pathname.includes("pasajero")) smartBannerType = "pax";
  return (
    <>
      <Seo></Seo>
      <Header></Header>
      {children}
      <SmartBanner type={smartBannerType}></SmartBanner>
      <Footer></Footer>
    </>
  );
};

export default Layout;
