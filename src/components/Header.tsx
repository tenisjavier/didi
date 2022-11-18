import React from "react";
import { useLocation } from "@reach/router";
import { useCountry } from "../context/countryContext";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb from "./Breadcrumb";

import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <nav className="fixed z-30 h-20 w-full bg-gray-primary bg-opacity-80">
        <div className="flex h-full items-center justify-between">
          <Navlogo />
          <Menu></Menu>
        </div>
      </nav>
      <Breadcrumb></Breadcrumb>
    </>
  );
};

const Navlogo = () => {
  const countryCode = useCountry().code;
  const { pathname } = useLocation();

  const logo = pathname.includes("food") ? (
    <Link className="" to={`/${countryCode}/food/`}>
      <StaticImage
        src={`../images/didi-food-logo.png`}
        alt="DiDi"
        className=""
        width={150}
      />
    </Link>
  ) : (
    <Link
      className=""
      to={`${countryCode !== "en" ? `/${countryCode}/` : "/"}`}
    >
      <StaticImage
        src={`../images/didi-logo.png`}
        alt="DiDi"
        className=""
        width={100}
      />
    </Link>
  );
  return <div className="p-3">{logo}</div>;
};

export default Header;
