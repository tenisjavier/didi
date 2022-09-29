import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FooterLink from "./FooterLink";
import { getFooterLinks } from "../config/footer-config";
import { getfooterCountryFood } from "../config/foodCountry-config";

const FooterFood = () => {
  const { i18n } = useTranslation();
  const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];
  const countryCode = i18n.language;
  const links = getFooterLinks(countryCode);
  const foodCountry = getfooterCountryFood(countryCode);

  return (
    <footer>
      <div className="border-buffer h-32 border-x-0 border-b-2 border-t-0 border-solid border-white bg-gray-primary text-white ">
        <div className="container mx-auto h-full">
          <FooterLink links={links}></FooterLink>
        </div>
      </div>

      <div className="h-96 bg-gray-primary lg:h-80">
        <div className="container mx-auto flex h-full flex-wrap items-center justify-center">
          <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2">
            <Link to="/">
              <StaticImage
                src="../images/didi-food-logo.png"
                alt="DiDi"
                width={190}
              />
            </Link>

            <div className="text-c h-auto w-3/4 lg:w-full mt-5">
              {foodCountry &&
                foodCountry.map((c: any, index: number) => {
                  if (index === 0) {
                    return (
                      <a
                        href={c.hostname}
                        key={index}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {i18n.language === "eg" ? c.arabicName : null}
                        {sslCountries.includes(i18n.language)
                          ? c.spanishName
                          : null}
                        {i18n.language !== "eg" &&
                        !sslCountries.includes(i18n.language)
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
                          {i18n.language === "eg" ? c.arabicName : null}
                          {sslCountries.includes(i18n.language)
                            ? c.spanishName
                            : null}
                          {i18n.language !== "eg" &&
                          !sslCountries.includes(i18n.language)
                            ? c.englishName
                            : null}
                        </a>
                      </span>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFood;
