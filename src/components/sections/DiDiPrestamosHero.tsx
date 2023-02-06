import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPrestamosHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPrestamosHero = ({ bgImage, image }: DiDiPrestamosHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPrestamosHero.title"),
    desc: t("DiDiPrestamosHero.desc"),
    textColor: t("DiDiPrestamosHero.textColor"),
    bgColor: t("DiDiPrestamosHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "!z-10 m-4 w-110",
    btnMode: t("DiDiPrestamosHero.btnMode"),
    btnType: "bothPrestamos",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPrestamosHero;
