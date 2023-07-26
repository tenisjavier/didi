import React, { useEffect } from "react";
import { SingleDropMenuItem } from "../../../../config/menu-config";
import DropdownItem from "./DropdownItem";

interface DropdownMenuProps {
  links: SingleDropMenuItem[];
  countryCode?: string;
  isOpen?: boolean;
}

const DropdownMenu = ({ links, countryCode, isOpen }: DropdownMenuProps) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } xl:bg-[#f2f2f2] bg-[#EDECEC] top-14 w-full lg:group-hover:block lg:hidden lg:absolute lg:w-80 transition-all`}
    >
      {links.map((item, index) => (
        <DropdownItem
          key={index}
          url={item.url}
          text={item.text}
          countryCode={countryCode}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
