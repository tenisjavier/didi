import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
const FooterLink = ( {links} ) => {
    return ( 
        <div className="bg-gray-500 flex flex-wrap h-full">
            <div className="hidden lg:flex-initial lg:flex Lg:flex-row lg:w-2/3 bg-grey-primary">
                {
                    links.map( link => (
                        <div className="flex-auto flex justify-center items-center text-lg">
                            <a href={link.link} className="hover:text-white hover:opacity-70">{link.title}</a>
                        </div>
                    ))
                }
            </div>

            <div className="flex-initial w-full lg:w-1/3 bg-grey-primary h-full flex justify-center items-center">
                <StaticImage
                    src="../images/Download-Icons.png"
                    alt="didi logo"
                    className="w-10/12 h-auto"
                />
            </div>
        </div>
     );
}
 
export default FooterLink;