import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyWomanHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyWomanHero = ({ bgImage, image }: SafetyWomanHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyWomanHero.title"),
    textColor: t("SafetyWomanHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block ",
    image: image,
    reverse: true,
    imageStyle: "z-10 m-4 w-80",
    btnMode: t("SafetyWomanHero.btnMode"),
    btnText: t("SafetyWomanHero.btnText"),
    btnLink: t("SafetyWomanHero.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyWomanHero;
