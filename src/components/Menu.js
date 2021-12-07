import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMenuLinks } from "../../config/menu-config";
import "../styles/header.css";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = getMenuLinks("cl");

  return (
    <div className="h-full">
      <FontAwesomeIcon
        icon={faBars}
        className=" m-4 lg:hidden cursor-pointer"
        size="lg"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div
        className={
          "h-full w-full " +
          (open ? "absolute left-0 " : "hidden ") +
          "lg:block"
        }
      >
        <ul className="flex flex-col h-screen items-center pt-8 bg-grey-primary bg-opacity-80 lg:h-full lg:flex-row lg:bg-transparent lg:p-0">
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
    <li className="flex flex-col group ml-8 lg:justify-center lg:items-center p-2 text-white w-full lg:w-44 lg:p-0 lg:ml-0">
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
        className="flex h-11 pl-12 items-center lg:justify-center lg:p-0 hover:bg-grey-primary hover:text-white"
        href={props.url}
      >
        {props.text}
      </a>
    );
  };

  return (
    <div className="w-full top-20 transition lg:opacity-0 group-hover:opacity-80 lg:absolute  lg:w-56 lg:bg-grey-primary lg:bg-opacity-80 lg:border-orange-primary lg:border-t-2 overflow-hidden">
      {props.dropLinks.map((item, index) => (
        <DropdownItem key={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default Menu;
