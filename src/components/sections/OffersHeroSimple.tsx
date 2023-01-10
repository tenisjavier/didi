import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const OffersHeroSimple = ({ bgImage }: PartnersHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("OffersHeroSimple.title"),
    desc: t("OffersHeroSimple.desc"),
    textColor: t("OffersHeroSimple.textColor"),
    bgColor: t("OffersHeroSimple.bgColor"),
    ...(bgImage && {
      bgImage: bgImage,
      bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default OffersHeroSimple;
