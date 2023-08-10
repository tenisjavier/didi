import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPrestamosBlogHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPrestamosBlogHero = ({ bgImage }: DiDiPrestamosBlogHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPrestamosBlogHero.title"),
    desc: t("DiDiPrestamosBlogHero.desc"),
    textColor: t("DiDiPrestamosBlogHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("DiDiPrestamosBlogHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPrestamosBlogHero;
