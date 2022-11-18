import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FeatureHeroProps {
  title: string;
  desc?: string;
  btnType?:
    | "both"
    | "drv"
    | "pax"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater";
}

const FeatureHero = ({ title, desc, btnType }: FeatureHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: "white",
    bgColor: "bg-blue-primary",
    btnMode: t("PaxHero.btnMode"),
    btnType: btnType,
  };
  return <CTASection {...props}></CTASection>;
};

export default FeatureHero;
