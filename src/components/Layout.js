import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { CountryProvider } from "../context/countryContext";
import Seo from "./SEO";
import Header from "../components/Header";
import Footer from "./Footer";
import FooterFood from "./FooterFood";
import SmartBanner from "./SmartBanner";
import PasswordPopup from "./PasswordPopup";
import DiDiCreditFooter from "./DiDiCreditFooter";
import "../styles/global.css";

//? layout with global header, menu, smartbanner and footer
const Layout = ({
  sb = true,
  sbType,
  index = true,
  customBreadcrumb,
  title,
  desc,
  sbTitle,
  sbDesc,
  sbCTA,
  password,
  schema,
  children,
}) => {
  const { pathname } = useLocation();

  //* Password for the Journey
  let showPass = password;
  const isBrowser = typeof window !== "undefined";
  if (password) {
    if (isBrowser) {
      const sessionItem = window.sessionStorage.getItem("protected");
      showPass = sessionItem !== null && sessionItem === "false" ? false : true;
    }
    if (!isBrowser) showPass = false;
  }

  const [showPassword, setShowPassword] = useState(showPass);
  const handleShowPassword = (val) => {
    window.sessionStorage.setItem("protected", false);
    setShowPassword(val);
  };

  //?SmartBanners Rules per URL
  let smartBannerType = "drv";
  if (pathname.includes("didi-fleet")) smartBannerType = "fleet";
  if (pathname.includes("didipay")) smartBannerType = "payment";
  if (pathname.includes("/food"))
    smartBannerType = "foodEater";
  if (pathname.includes("food/restaurantes")) smartBannerType = "foodBusiness";
  if (pathname.includes("food/repartidores")) smartBannerType = "foodDelivery";
  if (pathname.includes("food/en/restaurantes"))
    smartBannerType = "foodBusiness";
  if (pathname.includes("food/en/repartidores"))
    smartBannerType = "foodDelivery";
  if (pathname.includes("pasajero")) smartBannerType = "pax";
  if (pathname.includes("articulos")) smartBannerType = "pax";
  if (pathname.includes("newsroom")) smartBannerType = "pax";
  if (pathname.includes("/tarjeta-de-credito")) smartBannerType = "card";
  if (pathname === "/") smartBannerType = "en"; //? en is pax in english for the root pages
  if (sbType) smartBannerType = sbType;

  const isFood = pathname.includes("/food");
  const isTarjeta = pathname.includes("/tarjeta-de-credito");

  const pageContent = (
    <>
      <Seo title={title} desc={desc} index={index} schema={schema}></Seo>
      <Header customBreadcrumb={customBreadcrumb}></Header>
      {children}
      {sb && (
        <SmartBanner
          type={smartBannerType}
          sbTitle={sbTitle}
          sbDesc={sbDesc}
          sbCTA={sbCTA}
        ></SmartBanner>
      )}
      {isFood ? (
        <FooterFood></FooterFood>
      ) : isTarjeta ? (
        <DiDiCreditFooter></DiDiCreditFooter>
      ) : (
        <Footer></Footer>
      )}
    </>
  );
  return (
    <CountryProvider>
      {showPassword ? (
        <PasswordPopup handleShowPassword={handleShowPassword}></PasswordPopup>
      ) : (
        pageContent
      )}
    </CountryProvider>
  );
};

export default Layout;
