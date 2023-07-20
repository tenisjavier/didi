import React, { useMemo, useState } from "react";
import NavItem from "./NavItem";
import { SingleMenuItem } from "../../../config/menu-config";
import DropdownMenu from "./DropdownMenu";

interface NavListProps {
  links: SingleMenuItem[];
  countryCode: string;
}

const NavList = ({ links, countryCode }: NavListProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <>
      {links &&
        useMemo(() => {
          return links.map((menuLink, index) => (
            <NavItem
              key={index}
              link={menuLink}
              handleOpen={(key, value) =>
                setDropdownOpen({ ...dropdownOpen, [key]: value })
              }
            >
              {menuLink.dropMenu && (
                <DropdownMenu
                  key={index}
                  links={menuLink.dropMenu}
                  countryCode={countryCode}
                  isOpen={dropdownOpen[menuLink.text]}
                />
              )}
            </NavItem>
          ));
        }, [links, dropdownOpen])}
    </>
  );
};

export default NavList;
