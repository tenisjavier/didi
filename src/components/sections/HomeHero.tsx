import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { BtnProps } from "../Btn";

interface HomeHeroProps extends BtnProps {
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
  title?: string;
}

const HomeHero = ({
  bgImage,
  mobileBgImage,
  title,
  btnType,
}: HomeHeroProps) => {
  //? if there is a mobile image use that one
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full md:block "
    : "!absolute z-0 h-full w-full md:block ";
  const props: CTAProps = {
    hero: true,
    title: title || t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden ",
    btnMode: t("HomeHero.btnMode"),
    btnType: btnType || "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
