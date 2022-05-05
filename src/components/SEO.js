import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import { getMetaByPath } from "../../config/seo-config";
import insertBtnParams from "../../config/analytics-config";

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCountry {
        nodes {
          name
          code
        }
      }
    }
  `);
  const countries = data.allContentfulCountry.nodes;
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const { pathname, origin } = useLocation();
  const country = countries.filter((c) => c.code === countryCode).pop();
  let countryName =
    country.name.charAt(0).toUpperCase() + country.name.slice(1);

  const meta = getMetaByPath(
    countryCode,
    pathname.substring(3, pathname.length)
  );

  //if is int
  if (pathname === "/") countryName = "";

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={`${meta.title} | DiDi ${countryName}`}
    >
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={origin + pathname} />
      <link rel="alternate" href={origin + pathname} hreflang="es-CL" />

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
