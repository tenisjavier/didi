import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodAboutCTA = ({ image }: FoodAboutCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodAboutCTA.title"),
    desc: t("FoodAboutCTA.desc"),
    bgColor: t("FoodAboutCTA.bgColor"),
    textColor: t("FoodAboutCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 h-80 w-100 rounded",
    reverse: true,
    btnType: "foodEater",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutCTA;
