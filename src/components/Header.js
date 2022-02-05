import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <nav className="bg-gray-primary fixed z-20 h-20 w-full bg-opacity-80">
      <div className="flex h-full items-center justify-between">
        <Navlogo />
        <Menu></Menu>
      </div>
    </nav>
  );
};

const Navlogo = () => {
  return (
    <div className="p-3">
      <Link className="" to="/cl">
        <StaticImage
          src="../images/didi-logo.png"
          alt="didi logo"
          className=""
          width={100}
        />
      </Link>
    </div>
  );
};

export default Header;
