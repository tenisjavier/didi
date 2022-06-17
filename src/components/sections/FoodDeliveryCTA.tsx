import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryCTAProps {
  image: any;
}

const FoodDeliveryCTA = ({ image }: FoodDeliveryCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FoodDeliveryCTA.title"),
    desc: t("FoodDeliveryCTA.desc"),
    bgColor: t("FoodDeliveryCTA.bgColor"),
    textColor: t("FoodDeliveryCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodDeliveryCTA.btnMode"),
    btnType: "foodDelivery",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryCTA;
