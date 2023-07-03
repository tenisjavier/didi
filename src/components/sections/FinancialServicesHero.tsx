import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FinancialServicesHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FinancialServicesHero = ({
  bgImage,
  mobileBgImage,
}: FinancialServicesHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-75 md:block "
    : "!absolute z-0 h-full w-full brightness-75 md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("FinancialServicesHero.title"),
    desc: t("FinancialServicesHero.desc"),
    textColor: t("FinancialServicesHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:!hidden ",
  };
  return <CTASection {...props}></CTASection>;
};

export default FinancialServicesHero;
