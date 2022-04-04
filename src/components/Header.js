import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb from "./Breadcrumb";
import { getCountryCodeFromUrl } from "../../config/countries-config";

import Menu from "./Menu";

const Header = (props) => {
  return (
    <>
      <nav className="bg-gray-primary fixed z-20 h-20 w-full bg-opacity-80">
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
  const { pathname } = useLocation();
  const countryCode = getCountryCodeFromUrl(pathname);
  const logo = pathname.includes("food") ? (
    <Link className="" to={`/${countryCode}/food/`}>
      <StaticImage
        src={`../images/didi-food-logo.png`}
        alt="didi logo"
        className=""
        width={150}
      />
    </Link>
  ) : (
    <Link className="" to={`/${countryCode}/`}>
      <StaticImage
        src={`../images/didi-logo.png`}
        alt="didi logo"
        className=""
        width={100}
      />
    </Link>
  );
  return <div className="p-3">{logo}</div>;
};

export default Header;
