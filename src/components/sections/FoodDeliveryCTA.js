import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodDeliveryCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodDeliveryCTA.title"),
    desc: t("FoodDeliveryCTA.desc"),
    bgColor: t("FoodDeliveryCTA.bgColor"),
    textColor: t("FoodDeliveryCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodDeliveryCTA.btnMode"),
    btnType: "foodDelivery",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryCTA;
