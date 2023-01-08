import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodCTA = ({ image }: FoodCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodCTA.title"),
    desc: t("FoodCTA.desc"),
    bgColor: t("FoodCTA.bgColor"),
    textColor: t("FoodCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("FoodCTA.btnMode"),
    btnText: t("FoodCTA.btnText"),
    btnLink: t("FoodCTA.btnLink"),
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCTA;
