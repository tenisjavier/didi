import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessCTAProps {
  image: any;
}

const FoodBusinessCTA = ({ image }: FoodBusinessCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FoodBusinessCTA.title"),
    desc: t("FoodBusinessCTA.desc"),
    bgColor: t("FoodBusinessCTA.bgColor"),
    textColor: t("FoodBusinessCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBusinessCTA.btnMode"),
    btnType: "foodBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessCTA;
