import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASectionLink, { CTAProps } from "../CTASectionLink";

interface FoodBusinessHeroProps {
  bgImage: {
    title: string;
    description: string;
    link: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodBusinessHero = ({ bgImage }: FoodBusinessHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodBusinessHero.title"),
    desc: t("FoodBusinessHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBusinessHero.btnMode"),
    btnType: "foodBusiness",
    link: t("FoodBusinessHero.link")
  };
  return <CTASectionLink {...props}></CTASectionLink>;
};

export default FoodBusinessHero;
