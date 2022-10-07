import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
  data: {
    name: string;
  };
}

const FoodCityHero = ({ bgImage, image, data }: FoodCityHeroProps) => {
  const { t } = useTranslation();
  const { name } = data;
  const props: CTAProps = {
    hero: true,
    title: t("FoodCityHero.title", { city: `${name}` }),
    desc: t("FoodCityHero.desc"),
    textColor: t("FoodCityHero.textColor"),
    bgColor: t("FoodCityHero.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block brightness-50"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: image,
    }),

    btnMode: t("FoodCityHero.btnMode"),
    btnModeSecondary: t("FoodCityHero.btnModeSecondary"),
    btnType: "bothFood",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityHero;
