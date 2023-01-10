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

const LegalHero = ({ bgImage }: LegalHeroProp) => {
  const props: CTAProps = {
    hero: true,
    title: t("LegalHero.title"),
    desc: t("LegalHero.desc"),
    textColor: t("LegalHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("LegalHero.btnMode"),
    btnText: t("LegalHero.btnText"),
    btnLink: t("LegalHero.linkItem"),
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalHero;
