import React from "react";
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
    const links = getFooterLinks(getCountryCodeFromUrl());
    const countries = getCountriesLinks();
    return (
        <footer>
            <div className="bg-gray-primary h-32 border-b-2  border-white text-white ">
               <div className="container h-full">
                   <FooterLink links={links}></FooterLink>
               </div>
            </div>
            
            <div className="bg-gray-primary h-96 lg:h-80">
                <div className="container h-full flex flex-wrap">
                    <div className="flex-initial flex flex-col justify-center items-center w-full h-1/2 lg:h-full lg:w-1/2 lg:items-start">
                        <Link to="/cl">
                            <StaticImage
                            src="../images/didi-logo.png"
                            alt="didi logo"
                            width={180}
                            />
                        </Link>

                        <div className="h-auto w-3/4 text-c lg:w-full lg:pr-52 lg:text-left">
                             {countries.map( (c, index) => {
                                if(index === 0){
                                    return <a href={c.link} key={index} className="text-sm text-yellow-500 hover:text-yellow-300">{c.name}</a>
                                }
                                else{
                                    return <span key={index} className="text-white"> • <a href={c.link} className="text-sm text-yellow-500 hover:text-yellow-300">{c.name}</a></span>
                                }
                            })}
                        </div>
                    </div>

                    <div className="flex-initial w-full flex justify-center flex-wrap items-center px-24 xl:px-32 h-1/2 lg:h-full lg:w-1/2 ">
                        <p className="flex-auto text-white text-3xl w-full text-c lg:w-auto lg:text-left">Siguenos</p>
                        <div className="w-full flex lg:w-auto justify-center">
                            <div className="mr-5 text-white text-5xl"><FontAwesomeIcon icon={faFacebookSquare} /></div>
                            <div className="mr-5 text-white text-5xl"><FontAwesomeIcon icon={faInstagramSquare} /></div>
                            <div className="mr-5 text-white text-5xl"><FontAwesomeIcon icon={faTwitterSquare} /></div>
                        </div>
 
                    </div>
                </div>
            </div>
    </footer>
  );
};

export default Footer;
