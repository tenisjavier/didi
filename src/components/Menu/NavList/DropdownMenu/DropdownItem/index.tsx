import React from "react";
import gtmEvent from "../../../../../config/gtm";
import { navigate } from "gatsby";

interface DropdownItemProps {
  url?: string;
  text?: string;
  countryCode?: string;
}

const DropdownItem = ({ url, text, countryCode }: DropdownItemProps) => {
  const isCTA = url?.includes("onelink");

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

  return (
    <a
      className="flex h-12 w-full pl-[35%] lg:pl-6 items-center hover:bg-[#d9d9d9] transition-all"
      href={url}
      onClick={
        isCTA ? (e: any): void => handleItemClick(e, countryCode) : undefined
      }
    >
      {text}
    </a>
  );
};

export default DropdownItem;
