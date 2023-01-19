import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useCountry } from "../context/countryContext";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FooterLink from "./FooterLink";
import { getFooterLinks } from "../config/footer-config";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCountry(sort: { englishName: ASC }) {
        nodes {
          name
          arabicName
          englishName
          spanishName
          russianName
          chineseName
          hostname
        }
      }
    }
  `);
  const countries = data.allContentfulCountry.nodes;
  const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];
  const countryCode = useCountry().code;
  const links = getFooterLinks(countryCode);

  return (
    <footer className="pb-36 lg:pb-0 bg-gray-primary">
      <div className="border-buffer h-32 border-x-0 border-b-2 border-t-0 border-solid border-white text-white ">
        <div className="container mx-auto h-full">
          <FooterLink links={links}></FooterLink>
        </div>
      </div>

      <div className="h-96  lg:h-80">
        <div className="container mx-auto flex h-full flex-wrap">
          <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
            <Link to="/">
              <StaticImage
                src="../images/didi-logo.png"
                alt="DiDi"
                width={180}
              />
            </Link>

            <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
              {countries.map((c: any, index: number) => {
                if (c.name === "Hong Kong") return;
                if (index === 0) {
                  return (
                    <a
                      href={c.hostname}
                      key={index}
                      className="text-sm text-yellow-500 hover:text-yellow-300"
                    >
                      {countryCode === "ru" ? c.russianName : null}
                      {countryCode === "eg" ? c.arabicName : null}
                      {countryCode === "hk" ? c.chineseName : null}
                      {sslCountries.includes(countryCode)
                        ? c.spanishName
                        : null}
                      {countryCode !== "eg" &&
                      countryCode !== "ru" &&
                      countryCode !== "hk" &&
                      !sslCountries.includes(countryCode)
                        ? c.englishName
                        : null}
                    </a>
                  );
                } else {
                  return (
                    <span key={index} className="text-white">
                      {" "}
                      •{" "}
                      <a
                        href={c.hostname}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {countryCode === "ru" ? c.russianName : null}
                        {countryCode === "eg" ? c.arabicName : null}
                        {countryCode === "hk" ? c.chineseName : null}
                        {sslCountries.includes(countryCode)
                          ? c.spanishName
                          : null}
                        {countryCode !== "eg" &&
                        countryCode !== "ru" &&
                        countryCode !== "hk" &&
                        !sslCountries.includes(countryCode)
                          ? c.englishName
                          : null}
                      </a>
                    </span>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex h-1/2 w-full flex-initial flex-wrap items-center justify-center px-24 lg:h-full lg:w-1/2 xl:px-32 ">
            <div className="flex w-full justify-center lg:w-auto">
              <a href="https://global-rides-passenger.onelink.me/xNlo/globalhomepage">
                {sslCountries.includes(countryCode) && (
                  <StaticImage
                    alt="Logo Stores"
                    src="../images/android-ios-spanish.png"
                    width={200}
                  ></StaticImage>
                )}
                {countryCode === "eg" && (
                  <StaticImage
                    alt="Logo Stores"
                    src="../images/android-ios-arabic.png"
                    width={200}
                  ></StaticImage>
                )}
                {countryCode === "ru" && (
                  <StaticImage
                    alt="Logo Stores"
                    src="../images/android-ios-russian.png"
                    width={200}
                  ></StaticImage>
                )}
                {countryCode !== "ru" &&
                  countryCode !== "eg" &&
                  !sslCountries.includes(countryCode) && (
                    <StaticImage
                      alt="Logo Stores"
                      src="../images/downloads-icons-en.png"
                      width={200}
                    ></StaticImage>
                  )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
