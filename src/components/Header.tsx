import React from "react";
import { useLocation } from "@reach/router";
import { useCountry } from "../context/countryContext";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";
import Menu from "./Menu";
import MenuCountryFlags from "./MenuCountryFlags";

interface HeaderProps extends BreadcrumbProps { }

const Header = ({ customBreadcrumb }: HeaderProps) => {
  return (
    <div className="h-14 w-full">
      <nav className="fixed z-40 h-14 w-full shadow-sm  shadow-orange-primary bg-white ">
        <div className="flex h-full items-center justify-between">
          <Navlogo />
          <div className="flex gap-1 items-center h-full">
            <MenuCountryFlags />
            <Menu />
          </div>
        </div>
      </nav>
      <Breadcrumb customBreadcrumb={customBreadcrumb}></Breadcrumb>
    </div>
  );
};

const Navlogo = () => {
  const countryCode = useCountry().code;
  const { pathname } = useLocation();

  let logoImg = (
    <StaticImage
      src="../images/didi-logo-without-bg.png"
      alt="DiDi Logo"
      width={80}
    />
  );
  if (pathname.includes("food"))
    logoImg = (
      <StaticImage
        src="../images/didi-food-logo.png"
        alt="DiDi Food Logo"
        width={120}
        className=""
      />
    );
  if (pathname.includes("/co/food/"))
    logoImg = (
      <StaticImage
        src="../images/didi-food-logo-colombia.png"
        alt="DiDi Food Logo Colombia"
        width={120}
      />
    );
  if (pathname.includes("/didipay/"))
    logoImg = (
      <StaticImage
        src="../images/didi-pay-logo.png"
        alt="DiDi Pay Logo"
        width={120}
      />
    );
  if (pathname.includes("/tarjeta-de-credito/"))
    logoImg = (
      <StaticImage
        src="../images/didi-logo-card.png"
        alt="DiDi Card"
        width={120}
      />
    );

  let logoLink = `/${countryCode}/`;
  if (countryCode === "en") logoLink = "/";
  if (pathname.includes("food")) logoLink = `/${countryCode}/food/`;
  if (pathname.includes("/didipay/")) logoLink = `/${countryCode}/didipay/`;
  if (pathname.includes("/tarjeta-de-credito/"))
    logoLink = `/${countryCode}/tarjeta-de-credito/`;

  return (
    <div className="pl-8">
      <Link className="" to={logoLink}>
        {logoImg}
      </Link>
    </div>
  );
};

export default Header;
