import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import { getMetaByPath } from "../config/seo-config";
import insertBtnParams from "../config/analytics-config";

const SEO = () => {
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
  const country = countries.filter((c) => c.code === countryCode).pop();
  let { name: countryName, languageCode: lang } = country;

  const cleanPath = pathname.substring(3, pathname.length);
  const meta = getMetaByPath(countryCode, cleanPath);

  let title = meta.title + " | DiDi " + countryName;

  //if is int
  if (pathname === "/") {
    title = "DiDi Global - The World's Leader in Mobility Technology";
    meta.desc =
      "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.";
  }
  if (pathname === "/contact/" || pathname === "/contact") {
    title = "Contact Us | DiDi Global";
    meta.desc =
      "DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.";
  }

  return (
    <Helmet htmlAttributes={{ lang: lang }} title={title}>
      <meta name="title" content={`${title}`} data-react-helmet="true"></meta>
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={origin + pathname} />
      {countries.map((c, index) => {
        const placeRegex =
          /(\/lugares\/(.+))|(\/articulos\/(.+))|(\/guias\/(.+))|(\/ciudades\/(.+))|(\/driver\/(.+))|(\/food\/blog\/(.+))/;

        return placeRegex.test(cleanPath) ? null : (
          <link
            key={index}
            rel="alternate"
            href={origin + "/" + c.code + cleanPath}
            hreflang={`${c.languageCode}-${c.code}`}
          />
        );
      })}

      {
        // activate tracking pixel when DOM is mounted
        useEffect(() => {
          insertBtnParams();
        }, [])
      }
    </Helmet>
  );
};

export default SEO;
