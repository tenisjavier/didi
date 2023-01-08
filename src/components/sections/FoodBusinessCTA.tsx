import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodBusinessCTA = ({ image }: FoodBusinessCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodBusinessCTA.title"),
    desc: t("FoodBusinessCTA.desc"),
    bgColor: t("FoodBusinessCTA.bgColor"),
    textColor: t("FoodBusinessCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodBusinessCTA.btnMode"),
    btnType: "foodBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessCTA;
