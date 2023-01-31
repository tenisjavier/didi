import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutDeliveryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodAboutDeliveryCTAEn = ({ image }: FoodAboutDeliveryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodAboutDeliveryCTA.title"),
    desc: t("FoodAboutDeliveryCTA.desc"),
    bgColor: t("FoodAboutDeliveryCTA.bgColor"),
    textColor: t("FoodAboutDeliveryCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: "primary",
    btnType: "foodDeliveryEn",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutDeliveryCTAEn;