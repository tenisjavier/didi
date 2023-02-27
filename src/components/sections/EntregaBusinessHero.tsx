import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const EntregaBusinessHero = ({ bgImage }: FoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("EntregaBusinessHero.title"),
    desc: t("EntregaBusinessHero.desc"),
    textColor: t("EntregaBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90  md:block",
    btnMode: t("EntregaBusinessHero.btnMode"),
    btnType: "entregaBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default EntregaBusinessHero;
