import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { CountryProvider } from "../context/countryContext";
import Seo from "./SEO";
import Header from "../components/Header";
import Footer from "./Footer";
import FooterFood from "./FooterFood";
import SmartBanner from "./SmartBanner";
import PasswordPopup from "./PasswordPopup";
import "../styles/global.css";

//? layout with global header, menu, smartbanner and footer
const Layout = ({
  sb = true,
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

  //* EXPERIMENT A/B

  if (isBrowser) {
    //? if was in a past experiment delete ls
    if (
      window.localStorage.getItem("test_version") &&
      window.localStorage.getItem("test_version").indexOf("202303") > -1
    )
      window.localStorage.removeItem("test_version");
    if (pathname === "/mx/" || pathname === "/mx/home/") {
      const test_version = window.localStorage.getItem("test_version");

      //? if is a new user with no ls
      if (!test_version) {
        let group = Math.random();
        console.log("202304-home-original");
        window.localStorage.setItem("test_version", "202304-home-original");
        if (group < 0.5) {
          window.localStorage.setItem("test_version", "202304-home-heroOneBtn");
          console.log("202304-home-heroOneBtn");
          if (window.location.pathname === "/mx/")
            window.location.replace("/mx/home/");
        }
      }

      //? if is a old user
      if (test_version === "202304-home-heroOneBtn") {
        console.log("202304-home-heroOneBtn");
        if (window.location.pathname === "/mx/")
          window.location.replace("/mx/home/");
      }
    }
  }

  //?SmartBanners Rules per URL
  let smartBannerType = "drv";
  if (pathname.includes("didi-fleet")) smartBannerType = "fleet";
  if (pathname.includes("didipay")) smartBannerType = "payment";
  if (pathname.includes("/food") && !pathname.includes("thejourney"))
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
  if (pathname === "/") smartBannerType = "en"; //? en is pax in english for the root pages

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
      {pathname.includes("/food") && !pathname.includes("thejourney") ? (
        <FooterFood></FooterFood>
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
