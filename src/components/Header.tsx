import React from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Breadcrumb from "./Breadcrumb";

import Menu from "./Menu";
import MenuRestaurant from "./MenuRestaurant"

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="fixed z-30 h-20 w-full bg-gray-primary bg-opacity-80">
        <div className="flex h-full items-center justify-between">
          <Navlogo />
          {pathname.includes("restaurant") ? (<MenuRestaurant></MenuRestaurant>):
          <Menu></Menu>
        }
        </div>
      </nav>
      <Breadcrumb></Breadcrumb>
    </>
  );
};

const Navlogo = () => {
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
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
