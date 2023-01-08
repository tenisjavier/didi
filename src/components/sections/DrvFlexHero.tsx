import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFlexHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvFlexHero = ({ bgImage }: DrvFlexHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvFlexHero.title"),
    desc: t("DrvFlexHero.desc"),
    textColor: t("DrvFlexHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvFlexHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFlexHero;
