import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <nav className="w-full h-20 z-20 bg-gray-primary bg-opacity-80 fixed">
      <div className="flex justify-between items-center h-full">
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
