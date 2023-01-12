import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
  data: {
    name: string;
  };
}

const FoodCityHero = ({ bgImage, image, data }: FoodCityHeroProps) => {
  const { name } = data;
  const props: CTAProps = {
    hero: true,
    title: t("FoodCityHero.title", { city: `${name}` }),
    desc: t("FoodCityHero.desc"),
    textColor: t("FoodCityHero.textColor"),
    bgColor: t("FoodCityHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-50",
    ...(image && {
      image: image,
    }),

    btnMode: t("FoodCityHero.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityHero;
