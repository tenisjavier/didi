import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMenuLinks } from "../../config/menu-config";
import { getCountryCodeFromUrl } from "../../config/countries-config";

// @desc: Top Menu. Links from menu-config.
const Menu = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuLinks = getMenuLinks(getCountryCodeFromUrl(pathname));
  return (
    <div className="flex h-full items-center">
      <FontAwesomeIcon
        icon={faBars}
        className=" m-4 cursor-pointer text-white lg:hidden "
        size="lg"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div
        className={
          "w-full " +
          (open ? "absolute left-0 top-20 " : "hidden ") +
          "lg:block"
        }
      >
        <ul className="bg-gray-primary m-0 flex flex-col items-center bg-opacity-80 py-6 lg:h-full lg:flex-row lg:bg-transparent lg:p-0">
          {menuLinks.map((menuLink, index) => (
            <NavItem key={index} link={menuLink.url} text={menuLink.text}>
              {menuLink.dropMenu ? (
                <DropdownMenu key={index} dropLinks={menuLink.dropMenu} />
              ) : null}
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const NavItem = (props) => {
  return (
    <li
      className="group ml-8 flex w-full flex-col p-2 
    text-white lg:ml-0 lg:w-44 lg:items-center lg:justify-center lg:p-0 "
    >
      <a href={props.link} className="hover:text-white">
        {props.text}
      </a>
      {props.children}
    </li>
  );
};

const DropdownMenu = (props) => {
  const DropdownItem = (props) => {
    return (
      <a
        className="lg:bg-gray-primary flex h-11 items-center pl-12 hover:bg-opacity-100 hover:text-white lg:justify-center  lg:bg-opacity-80 lg:p-0"
        href={props.url}
      >
        {props.text}
      </a>
    );
  };

  return (
    <div
      className="lg:border-orange-primary top-20 w-full overflow-hidden transition group-hover:opacity-100 lg:absolute  lg:w-56 lg:border-x-0 
    lg:border-t-2 lg:border-b-0 lg:border-solid lg:opacity-0"
    >
      {props.dropLinks.map((item, index) => (
        <DropdownItem key={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default Menu;
