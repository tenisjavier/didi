import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodDeliveryHero = ({ bgImage }: FoodDeliveryHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("FoodDeliveryHero.title"),
    desc: t("FoodDeliveryHero.desc"),
    textColor: t("FoodDeliveryHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FoodDeliveryHero.btnMode"),
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHero;
