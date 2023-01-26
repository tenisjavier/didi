import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FinancialServicesHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FinancialServicesHero = ({ bgImage }: FinancialServicesHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FinancialServicesHero.title"),
    desc: t("FinancialServicesHero.desc"),
    textColor: t("FinancialServicesHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default FinancialServicesHero;
