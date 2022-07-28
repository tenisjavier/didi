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

        filter: { code: { in: ["cl", "ar", "pe", "co", "au", "do", "pa", "cr"] } }

      ) {
        nodes {
          name
          code
          hostname
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
  let countryName =
    country.name.charAt(0).toUpperCase() + country.name.slice(1);

  const cleanPath = pathname.substring(3, pathname.length);
  const meta = getMetaByPath(countryCode, cleanPath);

  //if is int
  if (pathname === "/") countryName = "";

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={`${meta.title} | DiDi ${countryName}`}
    >
      <meta
        name="title"
        content={`${meta.title} | DiDi ${countryName}`}
        data-react-helmet="true"
      ></meta>
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
            hreflang={`es-${c.code}`}
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
