import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { BtnType } from "../Btn";

interface DrvHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  btnType?: BtnType;
  btnMode?: string;
  isRTL?: boolean;
}

const DrvHero = ({ btnType, btnMode, isRTL, image }: DrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvHero.title"),
    desc: t("DrvHero.desc"),
    textColor: t("DrvHero.textColor"),
    bgColor: "bg-orange-primary",
    image: image,
    btnMode: btnMode || t("DrvHero.btnMode"),
    btnType: btnType || "drv",
    RTL: isRTL || false,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHero;
