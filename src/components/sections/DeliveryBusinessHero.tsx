import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryBusinessHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryBusinessHero = ({ bgImage }: DeliveryBusinessHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DeliveryBusinessHero.title"),
    desc: t("DeliveryBusinessHero.desc"),
    textColor: t("DeliveryBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DeliveryBusinessHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryBusinessHero;
