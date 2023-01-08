import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersHeroProps {
  bgImage: {
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

const PartnersHero = ({ bgImage, image }: PartnersHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PartnersHero.title"),
    desc: t("PartnersHero.desc"),
    textColor: t("PartnersHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnersHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersHero;
