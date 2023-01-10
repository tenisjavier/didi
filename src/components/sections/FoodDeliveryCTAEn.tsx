import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodDeliveryCTAEn = ({ image }: FoodDeliveryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodDeliveryCTA.title"),
    desc: t("FoodDeliveryCTA.desc"),
    bgColor: t("FoodDeliveryCTA.bgColor"),
    textColor: t("FoodDeliveryCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodDeliveryCTA.btnMode"),
    btnType: "foodDeliveryEn",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryCTAEn;
