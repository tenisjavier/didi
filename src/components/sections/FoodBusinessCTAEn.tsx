import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodBusinessCTAEn = ({ image }: FoodBusinessCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodBusinessCTA.title"),
    desc: t("FoodBusinessCTA.desc"),
    bgColor: t("FoodBusinessCTA.bgColor"),
    textColor: t("FoodBusinessCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBusinessCTA.btnMode"),
    btnType: "foodBusinessEn",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessCTAEn;
