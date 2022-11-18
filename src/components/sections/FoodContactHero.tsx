import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodContactHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodContactHero = ({ bgImage }: FoodContactHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodContactHero.title"),
    desc: t("FoodContactHero.desc"),
    textColor: t("FoodContactHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnText: t("FoodContactHero.btnText"),
    btnLink: t("FoodContactHero.btnLink"),
    btnMode: t("FoodContactHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodContactHero;
