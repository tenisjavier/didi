import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutDeliveryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodAboutDeliveryCTA = ({ image }: FoodAboutDeliveryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodAboutDeliveryCTA.title"),
    desc: t("FoodAboutDeliveryCTA.desc"),
    bgColor: t("FoodAboutDeliveryCTA.bgColor"),
    textColor: t("FoodAboutDeliveryCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: "primary",
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutDeliveryCTA;
