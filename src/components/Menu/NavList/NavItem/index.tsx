import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "../../../Image";
import { SingleMenuItem } from "../../../../config/menu-config";

interface NavItemProps {
  link: SingleMenuItem;
  children?: React.ReactNode;
  handleOpen: (key: string, value: boolean) => void;
  pathname?: string;
}

const NavItem: FC<NavItemProps> = ({ link, children, handleOpen, pathname }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { text, url, icon, dropMenu } = link || {};

  const handleNavigator = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024 && dropMenu?.length) {
        const newValue = !dropdownOpen;
        setDropdownOpen(newValue);
        handleOpen(text, newValue);
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <li className={`list-none group h-full flex flex-col w-full ${pathname?.includes('card') ? 'text-orange-primary' : 'text-gray-primary'} lg:w-auto xl:p-2 justify-center lg:p-0 gap-2.5`}>
      <a
        href={url}
        className="hover:text-orange-primary break-keep flex items-center justify-between w-full px-7 py-3 lg:px-0 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          handleNavigator();
        }}
      >
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          {icon && <Image imageData={icon} imageStyle="w-6" />}
          <span className="font-medium transition-all">{text}</span>
        </div>
        {(dropMenu?.length || 0) > 0 && (
          <FontAwesomeIcon
            icon={dropdownOpen ? faAngleDown : faAngleRight}
            className="lg:hidden text-orange-primary xl:text-3xl cursor-pointer"
          />
        )}
      </a>
      {children}
    </li>
  );
};

export default NavItem;
