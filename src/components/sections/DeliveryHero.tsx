import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryHero = ({ bgImage }: DeliveryHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DeliveryHero.title"),
    desc: t("DeliveryHero.desc"),
    textColor: t("DeliveryHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DeliveryHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryHero;
