import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvMotoHero = ({ bgImage }: DrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvMotoHero.title"),
    desc: t("DrvMotoHero.desc"),
    textColor: t("DrvMotoHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvMotoHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvMotoHero;
