import React from "react";
import { useLocation } from "@reach/router";
import { useCountry } from "../context/countryContext";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";

import Menu from "./Menu";

interface HeaderProps extends BreadcrumbProps {}

const Header = ({ customBreadcrumb }: HeaderProps) => {
  return (
    <>
      <nav className="fixed z-40 h-14 w-full shadow-sm  shadow-orange-primary bg-white ">
        <div className="flex h-full items-center justify-between">
          <Navlogo />
          <Menu></Menu>
        </div>
      </nav>
      <Breadcrumb customBreadcrumb={customBreadcrumb}></Breadcrumb>
    </>
  );
};

const Navlogo = () => {
  const countryCode = useCountry().code;
  const { pathname } = useLocation();

  let logoImg = (
    <StaticImage
      src="../images/didi-logo-white.jpeg"
      alt="DiDi"
      className=""
      width={120}
    />
  );
  if (pathname.includes("food"))
    logoImg = (
      <StaticImage
        src="../images/didi-food-logo-white.png"
        alt="DiDi"
        className=""
        width={120}
      />
    );
  if (pathname.includes("/co/food/"))
    logoImg = (
      <StaticImage
        src="../images/didi-food-logo-colombia-white.png"
        alt="DiDi"
        className=""
        width={120}
      />
    );
  if (pathname.includes("/didipay/"))
    logoImg = (
      <StaticImage
        src="../images/didi-pay-logo.png"
        alt="DiDi"
        className=""
        width={120}
      />
    );

  let logoLink = `/${countryCode}/`;
  if (countryCode === "en") logoLink = "/";
  if (pathname.includes("food")) logoLink = `/${countryCode}/food/`;
  if (pathname.includes("/didipay/")) logoLink = `/${countryCode}/didipay/`;

  return (
    <div className="p-3">
      <Link className="" to={logoLink}>
        {logoImg}
      </Link>
    </div>
  );
};

export default Header;
