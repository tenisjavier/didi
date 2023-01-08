import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const OffersHero = ({ bgImage, image }: PartnersHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("OffersHero.title"),
    desc: t("OffersHero.desc"),
    textColor: t("OffersHero.textColor"),
    bgColor: t("OffersHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("OffersHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default OffersHero;
