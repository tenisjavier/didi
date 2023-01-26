import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersPrivateHeroProps {
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

const PartnersPrivateHero = ({ bgImage, image }: PartnersPrivateHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PartnersHero.title"),
    desc: t("PartnersHero.desc"),
    textColor: t("PartnersHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersPrivateHero;
