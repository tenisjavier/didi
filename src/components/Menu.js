import React, { useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMenuLinks } from "../../config/menu-config";

// @desc: Top Menu. Links from menu-config.
const Menu = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const menuLinks = getMenuLinks(countryCode);
  return (
    <div className="flex h-full items-center ">
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
          (open
            ? "fixed left-0 top-20 right-0 bottom-0 overflow-y-scroll lg:absolute "
            : "hidden ") +
          "lg:block"
        }
      >
        <ul className="bg-gray-primary border-orange-primary m-0 flex flex-col items-center  border-x-0 border-b-0 border-t border-solid bg-opacity-80 lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:p-0">
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
      className="group flex w-full flex-col p-2 
    text-white lg:w-44 lg:items-center lg:justify-center lg:p-0 "
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
      className="lg:border-orange-primary top-20  w-full transition group-hover:opacity-100 lg:absolute lg:block  lg:w-56 lg:border-x-0 
    lg:border-t-2 lg:border-b-0 lg:border-solid lg:opacity-0"
    >
      {props.dropLinks.map((item, index) => (
        <DropdownItem key={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default Menu;
