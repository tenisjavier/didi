import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodSafetyHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodSafetyHero = ({ bgImage }: FoodSafetyHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodSafetyHero.title"),
    desc: t("FoodSafetyHero.desc"),
    textColor: t("FoodSafetyHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodSafetyHero;
