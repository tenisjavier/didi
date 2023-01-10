import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayHeroProps {
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

const DiDiPayHero = ({ bgImage, image }: DiDiPayHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayHero.title"),
    desc: t("DiDiPayHero.desc"),
    textColor: t("DiDiPayHero.textColor"),
    bgColor: t("DiDiPayHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    reverse: true,
    imageStyle: "!z-10 m-4 w-100",
    btnMode: t("DiDiPayHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayHero;
