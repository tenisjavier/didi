import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFleetHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
}

const StoreFleetHero = ({ bgImage, image }: StoreFleetHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFleetHero.title"),
    desc: t("StoreFleetHero.desc"),
    textColor: t("StoreFleetHero.textColor"),
    bgColor: t("StoreFleetHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
      reverse: true,
      btnMode: t("StoreFleetHero.btnMode"),
      btnModeSecondary: "hidden",
      btnType: "fleet",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFleetHero;
