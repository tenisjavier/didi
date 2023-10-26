import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvConfortHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvConfortHero = ({ bgImage }: DrvConfortHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvConfortHero.title"),
    desc: t("DrvConfortHero.desc"),
    textColor: t("DrvFlexHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvFlexHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvConfortHero;