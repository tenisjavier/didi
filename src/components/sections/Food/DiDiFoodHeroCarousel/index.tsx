import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";

interface FoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  type: "food" | "restaurant" | "repartidor";
}

type typesOfHeroType = {
  food: CTAProps;
  restaurant: CTAProps;
  repartidor: CTAProps;
}

const DiDiFoodHeroCarousel = ({ bgImage, mobileBgImage, type }: FoodHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";

  const typesOfHero: typesOfHeroType = {
    food: {
      hero: true,
      title: t("FoodHeroCarousel.title"),
      textColor: t("FoodHeroCarousel.textColor"),
      bgImage: bgImage,
      bgImageStyle: bgImageStyle,
      mobileBgImage: mobileBgImage,
      mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden",
      btnMode: t("FoodHeroCarousel.btnMode"),
      btnType: "foodEater",
      btnText: "Piede aqui",
      // mobileTitlePosition: "absolute top-20",
      titleStyle: "!text-2xl md:!text-5xl font-normal",
      textHighlighterConfig: {
        hasTextHighlighter: true,
        style: "text-white font-bold",
      },
    },
    restaurant: {
      hero: true,
      title: t("RestaurantHeroCarousel.title"),
      textColor: t("RestaurantHeroCarousel.textColor"),
      bgImage: bgImage,
      bgImageStyle: bgImageStyle,
      mobileBgImage: mobileBgImage,
      mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
      btnMode: t("RestaurantHeroCarousel.btnMode"),
      btnType: "foodBusiness",
      mobileTitlePosition: "absolute top-16",
      titleStyle: "!text-2xl md:!text-4xl",
    },
    repartidor: {
      hero: true,
      title: t("RepartidorHeroCarousel.title"),
      textColor: t("RepartidorHeroCarousel.textColor"),
      bgImage: bgImage,
      bgImageStyle: bgImageStyle,
      mobileBgImage: mobileBgImage,
      mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
      btnMode: t("RepartidorHeroCarousel.btnMode"),
      btnType: "foodDelivery",
      mobileTitlePosition: "absolute top-16",
      titleStyle: "!text-2xl md:!text-4xl",
    },
  };

  const props = typesOfHero[type]

  return <CTASection {...props}></CTASection>;
};

export default DiDiFoodHeroCarousel;
