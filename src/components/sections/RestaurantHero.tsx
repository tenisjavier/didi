import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const RestaurantHero = ({ bgImage }: RestaurantHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHero.title"),
    desc: t("RestaurantHero.desc"),
    textColor: t("RestaurantHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90  md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHero;
