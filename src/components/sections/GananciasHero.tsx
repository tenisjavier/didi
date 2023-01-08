import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GananciasHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const GananciasHero = ({ bgImage }: GananciasHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("GananciasHero.title"),
    desc: t("GananciasHero.desc"),
    textColor: t("GananciasHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("GananciasHero.btnMode"),
    btnText: t("GananciasHero.btnText"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default GananciasHero;
