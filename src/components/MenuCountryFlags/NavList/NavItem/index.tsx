import React, { FC } from "react";
import Image from "../../../Image";
import { SingleMenuItem } from "../../../../config/menu-config";

interface NavItemProps {
  link: SingleMenuItem;
  isSelected?: boolean;
}

const NavItem: FC<NavItemProps> = ({ link, isSelected }) => {

  const { text, url, icon } = link || {};

  console.log("isSelected", isSelected);


  const handleNavigator = (event: React.MouseEvent) => {
    event.preventDefault();
    window.location.href = url;
  }

  return (
    <li className={`${isSelected ? "bg-gray-200 rounded-full" : ""} py-1 px-2 list-none group h-full flex flex-col w-full text-gray-primary justify-center gap-2.5 `}>
      <a
        href={url}
        className={`hover:text-orange-primary break-keep flex items-center justify-between cursor-pointer`}
        onClick={handleNavigator}
      >
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          {icon && <Image imageData={{
            title: text,
            description: text,
          }} src={icon} imageStyle="w-6" />}
          <span className="font-medium transition-all">{text}</span>
        </div>
      </a>
    </li>
  );
};

export default NavItem;
