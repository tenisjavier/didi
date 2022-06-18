import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodAboutCTA = ({ image }: FoodAboutCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FoodAboutCTA.title"),
    desc: t("FoodAboutCTA.desc"),
    bgColor: t("FoodAboutCTA.bgColor"),
    textColor: t("FoodAboutCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 h-80 w-100 rounded"
      ></GatsbyImage>
    ),

    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutCTA;
