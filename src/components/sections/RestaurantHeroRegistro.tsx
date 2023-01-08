import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroRegistroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const RestaurantHeroRegistro = ({ bgImage }: RestaurantHeroRegistroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroRegistro.title"),
    desc: t("RestaurantHeroRegistro.desc"),
    textColor: t("RestaurantHeroRegistro.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90  md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroRegistro;
