import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TaxiHero = ({ bgImage }: TaxiHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TaxiHero.title"),
    desc: t("TaxiHero.desc"),
    textColor: t("TaxiHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50 md:block",
    btnMode: t("TaxiHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiHero;
