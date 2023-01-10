import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiPaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TaxiPaxHero = ({ bgImage }: TaxiPaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TaxiPaxHero.title"),
    desc: t("TaxiPaxHero.desc"),
    textColor: t("TaxiPaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiPaxHero;
