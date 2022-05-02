import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodAboutDeliveryCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodAboutDeliveryCTA.title"),
    desc: t("FoodAboutDeliveryCTA.desc"),
    bgColor: t("FoodAboutDeliveryCTA.bgColor"),
    textColor: t("FoodAboutDeliveryCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutDeliveryCTA;
