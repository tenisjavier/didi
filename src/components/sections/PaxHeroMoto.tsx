import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxHeroMotoProps {
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

const PaxHeroMoto = ({ bgImage, mobileBgImage }: PaxHeroMotoProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("PaxHeroMoto.title"),
    desc: t("PaxHeroMoto.desc"),
    textColor: t("PaxHeroMoto.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("PaxHeroMoto.btnMode"),
    btnType: "pax",
    btnText :"Descarga DiDi Moto",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHeroMoto;
