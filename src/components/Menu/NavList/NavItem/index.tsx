import {
  faBars,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SingleMenuItem } from "../../../../config/menu-config";
import Image from "../../../Image";

interface NavItemProps {
  link: SingleMenuItem;
  children?: any;
  handleOpen: (key: string, value: boolean) => void;
}

const NavItem = ({ link, children, handleOpen }: NavItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className="list-none group h-full flex flex-col w-full text-gray-primary lg:w-auto xl:p-2  justify-center lg:p-0 gap-2.5">
      <div className=" hover:text-orange-primary break-keep flex items-center justify-between w-full px-7 py-3 lg:px-0">
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          {link.icon && <Image imageData={link.icon} imageStyle="xl:w-8 w-6" />}
          <a href={link.url} className="font-medium transition-all">
            {link.text}
          </a>
        </div>
        {link?.dropMenu?.length && (
          <FontAwesomeIcon
            icon={!dropdownOpen ? faAngleRight : faAngleDown}
            className={`lg:hidden text-orange-primary xl:text-3xl cursor-pointer`}
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              handleOpen(link.text, !dropdownOpen);
            }}
          />
        )}
      </div>
      {children}
    </li>
  );
};

export default NavItem;
