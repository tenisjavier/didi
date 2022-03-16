import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import {
  getCountryFromUrl,
  getCountryCodeFromUrl,
} from "../../config/countries-config";
import { getMetaByPath } from "../../config/seo-config";
import { insertBtnParams } from "../../config/analytics-config";

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
      <link rel="alternate" href={host + pathname} hreflang="es-CL" />
      {
        // activate tracking pixel when DOM is mounted
        useEffect(() => {
          insertBtnParams();
        }, [])
      }

      {
        //Google Tag Manager
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l !== "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-PKNGZ5P")
      }
    </Helmet>
  );
};

export default SEO;
