import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayServiceHeroProps {
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
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayServiceHero = ({
  bgImage,
  mobileBgImage,
  image,
}: DiDiPayServiceHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full md:block "
    : "!absolute z-0 h-full w-full md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayServiceHero.title"),
    desc: t("DiDiPayServiceHero.desc"),
    textColor: t("DiDiPayServiceHero.textColor"),
    bgColor: t("DiDiPayServiceHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden ",
    image: image,
    imageStyle: "!z-10 m-4 w-100",
    btnMode: t("DiDiPayServiceHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayServiceHero;
