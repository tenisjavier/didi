import React from "react";
import { useLocation } from "@reach/router";
import { CountryProvider } from "../context/countryContext";
import Seo from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import FooterFood from "./FooterFood";
import SmartBanner from "./SmartBanner";
import "../styles/global.css";

// @desc: layout with global header, menu, smartbanner and footer
const Layout = ({
  sb = true,
  title,
  desc,
  sbTitle,
  sbDesc,
  sbCTA,
  children,
}) => {
  const countries = [
    "cl",
    "pe",
    "ar",
    "ec",
    "co",
    "pa",
    "cr",
    "do",
    "mx",
    "eg",
    "ru",
    "au",
    "nz",
  ];
  const { pathname } = useLocation();
  let countryCode = pathname ? pathname.substring(1, 3) : "";
  countryCode = countries.includes(countryCode) ? countryCode : "en";
  let smartBannerType = "drv";
  if (pathname.includes("didi-fleet")) smartBannerType = "fleet";
  if (pathname.includes("didipay")) smartBannerType = "payment";
  if (pathname.includes("food")) smartBannerType = "foodEater";
  if (pathname.includes("food/restaurantes")) smartBannerType = "foodBusiness";
  if (pathname.includes("food/repartidores")) smartBannerType = "foodDelivery";
  if (pathname.includes("pasajero")) smartBannerType = "pax";
  if (!countries.includes(countryCode)) {
    smartBannerType = "pax";
    sbTitle = "Download DiDi";
    sbDesc = "Rides, food and more";
    sbCTA = "Download";
  }

  return (
    <CountryProvider>
      <Seo title={title} desc={desc}></Seo>
      <Header></Header>
      {children}
      {sb ? (
        <SmartBanner
          type={smartBannerType}
          sbTitle={sbTitle}
          sbDesc={sbDesc}
          sbCTA={sbCTA}
        ></SmartBanner>
      ) : null}
      {pathname.includes("food") ? (
        <FooterFood></FooterFood>
      ) : (
        <Footer></Footer>
      )}
    </CountryProvider>
  );
};

export default Layout;
