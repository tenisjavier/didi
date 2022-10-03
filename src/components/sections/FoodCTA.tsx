import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodCTA = ({ image }: FoodCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FoodCTA.title"),
    desc: t("FoodCTA.desc"),
    bgColor: t("FoodCTA.bgColor"),
    textColor: t("FoodCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("FoodCTA.btnMode"),
    btnText: t("FoodCTA.btnText"),
    btnLink: t("FoodCTA.btnLink"),
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCTA;
