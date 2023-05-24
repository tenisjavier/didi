import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useCountry } from "../context/countryContext";
import { useLocation } from "@reach/router";
import { getMetaByPath } from "../config/seo-config";
import insertBtnParams from "../config/analytics-config";

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
              "ru"
              "hk"
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
    if (countryCode === "ru") {
      title = decodeURI(meta.title);
    }
  }
  if (!desc) {
    desc = meta.desc;
  }

  if (pathname.includes("/ru/")) countryName = "Россия";

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
        {/* {!["nz", "au", "ru", "eg"].includes(country.code) && (
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
            function OptanonWrapper() {}
          }, [])
        }
      </Helmet>
    </>
  );
};

export default SEO;
