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
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnersHero = ({ bgImage, image, mobileBgImage }: PartnersHeroProps) => {
  //? if there is a mobile image use that one
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full md:block "
    : "!absolute z-0 h-full w-full md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("PartnersHero.title"),
    desc: t("PartnersHero.desc"),
    textColor: t("PartnersHero.textColor"),
    bgImage: bgImage,
    image: image,
    bgImageStyle: bgImageStyle,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden ",
    mobileBgImage: mobileBgImage,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnersHero.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersHero;
