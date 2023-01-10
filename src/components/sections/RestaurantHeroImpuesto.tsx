import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroImpuestoProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const RestaurantHeroImpuesto = ({ bgImage }: RestaurantHeroImpuestoProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroImpuesto.title"),
    desc: t("RestaurantHeroImpuesto.desc"),
    textColor: t("RestaurantHeroImpuesto.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75  md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroImpuesto;
