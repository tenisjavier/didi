import React, { useState, useMemo } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useCountry } from "../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  getMenuLinks,
  SingleMenuItem,
  SingleDropMenuItem,
} from "../config/menu-config";
import { getMenuLinksFood } from "../config/menu-food-config";
import { getMenuLinksPay } from "../config/menu-pay-config";
import { getMenuLinksPr } from "../config/menu-pr-config";
import gtmEvent from "../config/gtm";

// @desc: Top Menu. Links from menu-config and menu-configFood.
const Menu = () => {
  const [open, setOpen] = useState(false);
  const countryCode = useCountry().code;
  const menuLinks: SingleMenuItem[] = getMenuLinks(countryCode);
  const menuLinksFood: SingleMenuItem[] = getMenuLinksFood(countryCode);
  const menuLinksPay: SingleMenuItem[] = getMenuLinksPay(countryCode);
  const menuLinksPr: SingleMenuItem[] = getMenuLinksPr(countryCode);
  const { pathname } = useLocation();

  let links = menuLinks;
  if (pathname.includes("food")) links = menuLinksFood;
  if (pathname.includes("/didipay/")) links = menuLinksPay;
  if (pathname.includes("thejourney")) links = menuLinksPr;
  return (
    <div className="flex h-full items-center">
      <FontAwesomeIcon
        icon={faBars}
        className=" m-4 cursor-pointer text-gray-primary lg:hidden w-5 "
        size="lg"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div
        className={
          "w-full h-auto lg:h-full " +
          (open
            ? "fixed left-0 top-14 right-0 bottom-0 overflow-y-scroll lg:absolute  bg-white"
            : "hidden ") +
          "lg:block"
        }
      >
        <ul className="m-0 flex flex-col items-center border-x-0 border-b-0  border-t border-solid border-orange-primary bg-white lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:p-0">
          {
            <>
              {links &&
                useMemo(() => {
                  return links.map((menuLink, index) => (
                    <NavItem key={index} link={menuLink}>
                      {menuLink.dropMenu ? (
                        <DropdownMenu
                          key={index}
                          links={menuLink.dropMenu}
                          countryCode={countryCode}
                        />
                      ) : null}
                    </NavItem>
                  ));
                }, [false])}
            </>
          }
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
      className="group h-full flex w-full flex-col p-2 
    text-gray-primary lg:w-44 lg:items-center lg:justify-center lg:p-0 "
    >
      <a href={link.url} className="hover:text-orange-primary">
        {link.text}
      </a>
      {children}
    </li>
  );
};

interface DropdownMenuProps {
  links: SingleDropMenuItem[];
  countryCode?: string;
}

const handleItemClick = (e: any, countryCode: any) => {
  e.preventDefault();
  const link = e.target.href;
  const form = link.includes("quickbolt") ? "quickbolt" : "h5";
  gtmEvent(`click-btn`, {
    btnType: "menu-link",
    btnLink: link,
    form: form,
    btnText: e.target.innerText,
    countryCode: countryCode,
  });
  navigate(link);
};

const DropdownMenu = ({ links, countryCode }: DropdownMenuProps) => {
  const DropdownItem = ({ url, text }: SingleDropMenuItem) => {
    const isCTA = url?.includes("onelink");
    return (
      <a
        className="flex h-11 items-center pl-12  hover:text-orange-primary hover:bg-gray-light lg:justify-center lg:bg-white  lg:p-0"
        href={url}
        onClick={
          isCTA ? (e: any): void => handleItemClick(e, countryCode) : undefined
        }
      >
        {text}
      </a>
    );
  };

  return (
    <div
      className="top-14 w-full  transition group-hover:block lg:absolute  lg:w-56  lg:border-x-0 lg:border-t-2 
    lg:border-b-0 lg:border-solid lg:border-orange-primary lg:hidden"
    >
      {links.map((item, index) => (
        <DropdownItem key={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default Menu;
