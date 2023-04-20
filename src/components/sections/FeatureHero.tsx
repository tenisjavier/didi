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
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FeatureHero = ({ title, desc, image, btnType }: FeatureHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    image: image,
    imageStyle: "z-10 m-4 w-80  rounded",
    textColor: "white",
    bgColor: "bg-blue-primary",
    btnMode: t("PaxHero.btnMode"),
    btnType: btnType,
  };
  return <CTASection {...props}></CTASection>;
};

export default FeatureHero;
