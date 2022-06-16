import React from "react";
import { FooterLinks } from "../config/footer-config";

interface FooterMenuProps {
  links: FooterLinks[];
}

const FooterMenu = ({ links }: FooterMenuProps) => {
  return (
    <div className="flex h-full flex-wrap bg-gray-primary">
      <div className="Lg:flex-row bg-grey-primary hidden lg:flex lg:w-2/3 lg:flex-initial">
        {links.map((link: FooterLinks, index: number) => (
          <div
            key={index}
            className="flex flex-auto items-center justify-center text-lg"
          >
            <a href={link.link} className="hover:text-white hover:opacity-70">
              {link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
