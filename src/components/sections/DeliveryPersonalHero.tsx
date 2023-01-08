import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryPersonalHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryPersonalHero = ({ bgImage }: DeliveryPersonalHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DeliveryPersonalHero.title"),
    desc: t("DeliveryPersonalHero.desc"),
    textColor: t("DeliveryPersonalHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DeliveryPersonalHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalHero;
