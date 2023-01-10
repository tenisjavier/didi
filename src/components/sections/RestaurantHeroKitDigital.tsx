import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroKitDigitalProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const RestaurantHeroKitDigital = ({
  bgImage,
}: RestaurantHeroKitDigitalProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroKitDigital.title"),
    desc: t("RestaurantHeroKitDigital.desc"),
    textColor: t("RestaurantHeroKitDigital.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75  md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroKitDigital;
