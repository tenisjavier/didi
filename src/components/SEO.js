import React, { useState, useEffect } from "react";
import ConsentPopup from "../components/ConsentPopup";
import gtmEvent from "../config/gtm";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import { getMetaByPath } from "../config/seo-config";
import insertBtnParams from "../config/analytics-config";

const SEO = ({ title, desc }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCountry(
        filter: {
          code: {
            in: [
              "cl"
              "ar"
              "pe"
              "co"
              "au"
              "do"
              "pa"
              "ec"
              "cr"
              "eg"
              "nz"
              "mx"
            ]
          }
        }
      ) {
        nodes {
          name
          code
          hostname
          languageCode
        }
      }
    }
  `);
  const countries = data.allContentfulCountry.nodes;
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const origin = "https://web.didiglobal.com";
  const { pathname } = useLocation();
  let country = "";
  let countryName = "";

  let lang = "en";
  let cleanPath = pathname;
  if (countryCode !== "en") {
    country = countries.filter((c) => c.code === countryCode).pop();
    countryName = country.name;
    lang = country.languageName;

    cleanPath = pathname.substring(3, pathname.length);
  }

  const meta = getMetaByPath(countryCode, cleanPath);
  if (!title) {
    title = meta.title;
  }
  if (!desc) {
    desc = meta.desc;
  }
  title = title + " | DiDi " + (countryName || "Global");
  //if is int
  if (pathname === "/") {
    title = "DiDi Global - The World's Leader in Mobility Technology";
    desc =
      "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.";
  }
  if (pathname === "/contact/" || pathname === "/contact") {
    title = "Contact Us | DiDi Global";
    desc =
      "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.";
  }

  // POPUP LOGIC
  // const windowGlobal = typeof window !== "undefined" && window;
  // const consentName = "didi_consent";
  // let shouldShowPopup = () =>
  //   !localStorage.getItem(consentName) && country.code === "nz";
  // if (shouldShowPopup)
  //   shouldShowPopup = () => !sessionStorage.getItem(consentName);
  // const [isVisible, setIsVisible] = useState(shouldShowPopup);
  // const saveConsent = (value, storageType) => {
  //   storageType.setItem(consentName, value);
  // };

  // const handleAcceptConsent = () => {
  //   saveConsent(country.code + "_true", localStorage);
  //   gtmEvent("Accept Consent");
  //   setIsVisible(false);
  // };

  // const handleDenyConsent = () => {
  //   saveConsent(country.code + "_false", sessionStorage);
  //   setIsVisible(false);
  // };

  return (
    <>
      <Helmet htmlAttributes={{ lang: lang }} title={title}>
        <meta name="title" content={`${title}`} data-react-helmet="true"></meta>
        <meta name="description" content={desc} />
        <link rel="canonical" href={origin + pathname} />
        {countries.map((c, index) => {
          const placeRegex = /(\/[A-Za-z]{2}\/$)/;

          return placeRegex.test(pathname) ? (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          ) : null;
        })}

        {
          // activate tracking pixel when DOM is mounted
          useEffect(() => {
            insertBtnParams();
          }, [])
        }
      </Helmet>
      {/* <ConsentPopup
        isVisible={isVisible}
        handleAccept={handleAcceptConsent}
        handleDeny={handleDenyConsent}
      ></ConsentPopup> */}
    </>
  );
};

export default SEO;
