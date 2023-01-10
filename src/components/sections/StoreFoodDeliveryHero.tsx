import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFoodDeliveryHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
}

const StoreFoodDeliveryHero = ({
  bgImage,
  image,
}: StoreFoodDeliveryHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFoodDeliveryHero.title"),
    desc: t("StoreFoodDeliveryHero.desc"),
    textColor: t("StoreFoodDeliveryHero.textColor"),
    bgColor: t("StoreFoodDeliveryHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
      reverse: true,
      btnMode: t("StoreFoodDeliveryHero.btnMode"),
      btnModeSecondary: "hidden",
      btnType: "foodEater",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFoodDeliveryHero;
