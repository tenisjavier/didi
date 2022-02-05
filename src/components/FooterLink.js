import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const FooterLink = ({ links }) => {
  return (
    <div className="bg-gray-primary flex h-full flex-wrap">
      <div className="Lg:flex-row bg-grey-primary hidden lg:flex lg:w-2/3 lg:flex-initial">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-auto items-center justify-center text-lg"
          >
            <a href={link.link} className="hover:text-white hover:opacity-70">
              {link.title}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-grey-primary flex h-full w-full flex-initial items-center justify-center lg:w-1/3">
        <StaticImage
          src="../images/Download-Icons.png"
          alt="didi logo"
          className="h-auto w-10/12"
        />
      </div>
    </div>
  );
};

export default FooterLink;
