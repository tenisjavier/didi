import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface LegalHeroProp {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PrivacyHero = ({ bgImage }: LegalHeroProp) => {
  const props: CTAProps = {
    hero: true,
    title: t("PrivacyHero.title"),
    desc: t("PrivacyHero.desc"),
    textColor: t("PrivacyHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    btnMode: t("PrivacyHero.btnMode"),
    btnText: t("PrivacyHero.btnText"),
    btnLink: t("PrivacyHero.linkItem"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PrivacyHero;
