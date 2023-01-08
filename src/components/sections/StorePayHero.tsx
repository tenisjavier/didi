import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StorePayHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
}

const StorePayHero = ({ bgImage, image }: StorePayHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StorePayHero.title"),
    desc: t("StorePayHero.desc"),
    textColor: t("StorePayHero.textColor"),
    bgColor: t("StorePayHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
      reverse: true,
      btnMode: t("StorePayHero.btnMode"),
      btnModeSecondary: "hidden",
      btnType: "payment",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StorePayHero;
