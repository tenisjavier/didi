import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvPartnerHero = ({ bgImage }: DrvPartnerHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvPartnerHero.title"),
    desc: t("DrvPartnerHero.desc"),
    textColor: t("DrvPartnerHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DrvPartnerHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerHero;
