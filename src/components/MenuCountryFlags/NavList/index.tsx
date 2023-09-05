import React, { useMemo, useState } from "react";
import NavItem from "./NavItem";
import { SingleMenuItem } from "../../../config/menu-config";

interface NavListProps {
  links: SingleMenuItem[];
  countryCode: string;
}

const NavList = ({ links, countryCode }: NavListProps) => {

  return (
    <>
      {links &&
        useMemo(() => {
          return links.map((menuLink, index) => (
            <NavItem
              key={index}
              link={menuLink}
              isSelected={menuLink?.url?.replace(/\//g, '') === countryCode}
            />
          ));
        }, [links])}
    </>
  );
};

export default NavList;
