import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import {
  getCountryFromUrl,
  getCountryCodeFromUrl,
} from "../../config/countries-config";
import { getMetaByPath } from "../../config/seo-config";

const SEO = () => {
  const country = getCountryFromUrl();
  const countryCode = getCountryCodeFromUrl();
  const { pathname, host } = useLocation();

  const meta = getMetaByPath(
    countryCode,
    pathname.substring(3, pathname.length)
  );

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={`${meta.title} | DiDi ${country}`}
    >
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={host + pathname} />
    </Helmet>
  );
};

export default SEO;
