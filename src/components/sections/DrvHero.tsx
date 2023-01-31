import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  isRTL?: boolean;
}

const DrvHero = ({ bgImage, isRTL }: DrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvHero.title"),
    desc: t("DrvHero.desc"),
    textColor: t("DrvHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvHero.btnMode"),
    btnType: "drv",
    RTL: isRTL || false
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHero;
