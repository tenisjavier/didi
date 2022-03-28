import React from "react";
import { useLocation } from "@reach/router";
import FooterLink from "./FooterLink.js";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { getFooterLinks, getCountriesLinks } from "../../config/footer-config";
import { getCountryCodeFromUrl } from "../../config/countries-config";

const Footer = () => {
  const { pathname } = useLocation();
  const links = getFooterLinks(getCountryCodeFromUrl(pathname));
  const countries = getCountriesLinks();
  return (
    <footer>
      <div className="bg-gray-primary border-buffer h-32 border-x-0 border-b-2 border-t-0 border-solid border-white text-white ">
        <div className="container mx-auto h-full">
          <FooterLink links={links}></FooterLink>
        </div>
      </div>

      <div className="bg-gray-primary h-96 lg:h-80">
        <div className="container mx-auto flex h-full flex-wrap">
          <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
            <Link to="/cl">
              <StaticImage
                src="../images/didi-logo.png"
                alt="didi logo"
                width={180}
              />
            </Link>

            <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
              {countries.map((c, index) => {
                if (index === 0) {
                  return (
                    <a
                      href={c.link}
                      key={index}
                      className="text-sm text-yellow-500 hover:text-yellow-300"
                    >
                      {c.name}
                    </a>
                  );
                } else {
                  return (
                    <span key={index} className="text-white">
                      {" "}
                      •{" "}
                      <a
                        href={c.link}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {c.name}
                      </a>
                    </span>
                  );
                }
              })}
            </div>
          </div>

          <div className="flex h-1/2 w-full flex-initial flex-wrap items-center justify-center px-24 lg:h-full lg:w-1/2 xl:px-32 ">
            <p className="text-c w-full flex-auto text-3xl text-white lg:w-auto lg:text-left">
              Siguenos
            </p>
            <div className="flex w-full justify-center lg:w-auto">
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
