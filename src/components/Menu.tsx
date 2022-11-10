import React, { useState, useMemo } from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  getMenuLinks,
  SingleMenuItem,
  SingleDropMenuItem,
} from "../config/menu-config";
import { getMenuLinksFood } from "../config/menu-food-config";

// @desc: Top Menu. Links from menu-config and menu-configFood.
const Menu = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const menuLinks: SingleMenuItem[] = getMenuLinks(countryCode);
  const menuLinksFood: SingleMenuItem[] = getMenuLinksFood(countryCode);
  const { pathname } = useLocation();

  return (
    <div className="flex h-full items-center ">
      <FontAwesomeIcon
        icon={faBars}
        className=" m-4 cursor-pointer text-white lg:hidden w-5 "
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
        <ul className="m-0 flex flex-col items-center border-x-0 border-b-0  border-t border-solid border-orange-primary bg-gray-primary bg-opacity-80 lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:p-0">
          {pathname.includes("food") ? (
            <>
              {menuLinksFood &&
                menuLinksFood.map((menuLink, index) => (
                  <NavItem key={index} link={menuLink}>
                    {menuLink.dropMenu ? (
                      <DropdownMenu key={index} links={menuLink.dropMenu} />
                    ) : null}
                  </NavItem>
                ))}
            </>
          ) : (
            <>
              {menuLinks &&
                useMemo(() => {
                  return menuLinks.map((menuLink, index) => (
                    <NavItem key={index} link={menuLink}>
                      {menuLink.dropMenu ? (
                        <DropdownMenu key={index} links={menuLink.dropMenu} />
                      ) : null}
                    </NavItem>
                  ));
                }, [false])}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

interface NavItemProps {
  link: SingleMenuItem;
  children?: any;
}

const NavItem = ({ link, children }: NavItemProps) => {
  return (
    <li
      className="group flex w-full flex-col p-2 
    text-white lg:w-44 lg:items-center lg:justify-center lg:p-0 "
    >
      <a href={link.url} className="hover:text-white">
        {link.text}
      </a>
      {children}
    </li>
  );
};

interface DropdownMenuProps {
  links: SingleDropMenuItem[];
}

const DropdownMenu = ({ links }: DropdownMenuProps) => {
  const DropdownItem = ({ url, text }: SingleDropMenuItem) => {
    return (
      <a
        className="flex h-11 items-center pl-12 hover:bg-opacity-100 hover:text-white lg:justify-center lg:bg-gray-primary  lg:bg-opacity-80 lg:p-0"
        href={url}
      >
        {text}
      </a>
    );
  };

  return (
    <div
      className="top-20 w-full  transition group-hover:opacity-100 lg:absolute lg:block lg:w-56  lg:border-x-0 lg:border-t-2 
    lg:border-b-0 lg:border-solid lg:border-orange-primary lg:opacity-0"
    >
      {links.map((item, index) => (
        <DropdownItem key={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default Menu;
