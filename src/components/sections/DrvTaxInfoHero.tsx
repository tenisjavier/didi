import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvTaxInfoHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvTaxInfoHero = ({ bgImage }: DrvTaxInfoHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvTaxInfoHero.title"),
    desc: t("DrvTaxInfoHero.desc"),
    textColor: t("DrvTaxInfoHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvTaxInfoHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvTaxInfoHero;
