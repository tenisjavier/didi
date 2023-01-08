import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFoodAppHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
}

const StoreFoodAppHero = ({ bgImage, image }: StoreFoodAppHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFoodAppHero.title"),
    desc: t("StoreFoodAppHero.desc"),
    textColor: t("StoreFoodAppHero.textColor"),
    bgColor: t("StoreFoodAppHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
      reverse: true,
      btnMode: t("StoreFoodAppHero.btnMode"),
      btnModeSecondary: "hidden",
      btnType: "foodEater",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFoodAppHero;
