import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useCountry } from "../context/countryContext";
import { useLocation } from "@reach/router";
import { getMetaByPath } from "../config/seo-config";
import insertBtnParams from "../config/analytics-config";
import saveFirstPage from "../config/save-first-page-config";

const SEO = ({ title, desc, index, schema }) => {
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
  const countryCode = useCountry().code;
  const origin = "https://web.didiglobal.com";
  const { pathname } = useLocation();
  let country = "";
  let countryName = "";

  let lang = "en";
  let cleanPath = pathname.substring(3, pathname.length);
  if (countryCode !== "en" && countryCode !== "es" && countryCode !== "mxen") {
    country = countries.filter((c) => c.code === countryCode).pop();
    countryName = country.name;
    lang = country.languageCode;
  }

  const meta = getMetaByPath(countryCode, cleanPath);
  if (!title) {
    title = meta.title;
  }
  if (!desc) {
    desc = meta.desc;
  }

  if (pathname.includes("/food/")) {
    title = title + " | DiDi Food " + (countryName || "Global");
  } else {
    title = title + " | DiDi " + (countryName || "Global");
  }

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

  const htmlAttributes = {
    lang: `${lang}-${countryCode.toUpperCase().slice(0, 2)}`,
  };
  if (schema === "faq") {
    htmlAttributes.itemScope = "";
    htmlAttributes.itemType = "https://schema.org/FAQPage";
  }

  //? canonical definition, ab pages should redirect to original

  const canonicalUrl =
    pathname !== "/mx/home/"
      ? origin + pathname
      : "https://web.didiglobal.com/mx/";

  //? Hreflang Logic
  const hreflangs = countries.map((c, index) => {
    switch (pathname) {
      case `/`:
        return (
          <link
            key={index}
            rel="alternate"
            href={origin + "/" + c.code + "/"}
            hreflang={`${c.languageCode}-${c.code}`}
          />
        );
      case `/${countryCode}/`:
        return (
          <link
            key={index}
            rel="alternate"
            href={origin + "/" + c.code + "/"}
            hreflang={`${c.languageCode}-${c.code}`}
          />
        );
      case `/${countryCode}/conductor/`:
      case `/${countryCode}/driver/`:
        if (["au", "eg", "nz"].includes(c.code)) {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/driver/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/conductor/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/conductor/requisitos-para-conducir/`:
        if (["au", "eg", "nz"].includes(c.code)) {
          return null;
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={
                origin + "/" + c.code + "/conductor/requisitos-para-conducir/"
              }
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/pasajero/`:
      case `/${countryCode}/rider/`:
        if (["au", "eg", "nz"].includes(c.code)) {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/rider/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/pasajero/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/centro-de-ayuda/`:
      case `/${countryCode}/help-center/`:
        if (["au", "eg", "nz"].includes(c.code)) {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/help-center/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/centro-de-ayuda/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/food/`:
        if (["au", "eg", "nz", "ar", "ec", "pa"].includes(c.code)) {
          return null;
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/food/"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/food/repartidores/`:
        if (["au", "eg", "nz", "ar", "ec", "pa"].includes(c.code)) {
          return null;
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/food/repartidores"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      case `/${countryCode}/food/restaurantes/`:
        if (["au", "eg", "nz", "ar", "ec", "pa"].includes(c.code)) {
          return null;
        } else {
          return (
            <link
              key={index}
              rel="alternate"
              href={origin + "/" + c.code + "/food/restaurantes"}
              hreflang={`${c.languageCode}-${c.code}`}
            />
          );
        }
      default:
        return null;
    }
  });

  //? END of hreflang logic

  return (
    <>
      <Helmet htmlAttributes={htmlAttributes} title={title}>
        {["nz", "au"].includes(country.code) && (
          <script
            src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script="f9f9aeb2-1532-4a70-bafe-28fce845d41c"
          ></script>
        )}
        {/* {!["nz", "au", "eg"].includes(country.code) && (
          <script
            src="../../hotjar.js"
            type="text/javascript"
            charset="UTF-8"
            async
          ></script>
        )} */}
        <meta name="title" content={`${title}`} data-react-helmet="true"></meta>
        <meta name="description" content={desc} />
        {pathname.includes("thejourney") || !index ? (
          <meta name="robots" content="noindex"></meta>
        ) : null}
        <link rel="canonical" href={canonicalUrl} />
        {hreflangs}
        {(pathname === "/" || pathname === `/${countryCode}/`) && (
          <link
            key={index}
            rel="alternate"
            href={origin}
            hreflang={`x-default`}
          />
        )}
        {
          // activate tracking pixel when DOM is mounted
          useEffect(() => {
            saveFirstPage();
            insertBtnParams();
            function OptanonWrapper() {}
          }, [])
        }
      </Helmet>
    </>
  );
};

export default SEO;
