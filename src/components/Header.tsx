import React from "react";
import { useLocation } from "@reach/router";
import { useCountry } from "../context/countryContext";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb from "./Breadcrumb";

import Menu from "./Menu";

const Header = ({customBreadcrumb} : any) => {
  return (
    <>
      <nav className="fixed z-30 h-20 w-full bg-gray-primary bg-opacity-80">
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
      src="../images/didi-logo.png"
      alt="DiDi"
      className=""
      width={100}
    />
  );
  if (pathname.includes("food"))
    logoImg = (
      <StaticImage
        src="../images/didi-food-logo.png"
        alt="DiDi"
        className=""
        width={150}
      />
    );
  if (pathname.includes("/co/food/"))
    logoImg = (
      <StaticImage
        src="../images/logo-didi-food-colombia.png"
        alt="DiDi"
        className=""
        width={150}
      />
    );

  let logoLink = `/${countryCode}/`;
  if (countryCode === "en") logoLink = "/";
  if (pathname.includes("food")) logoLink = `/${countryCode}/food`

  return (
    <div className="p-3">
      <Link className="" to={logoLink}>
        {logoImg}
      </Link>
    </div>
  );
};

export default Header;
