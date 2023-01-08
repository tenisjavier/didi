import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvCTA = ({ image }: DrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvCTA.title"),
    desc: t("DrvCTA.desc"),
    bullets: t("DrvCTA.bullets", { returnObjects: true }),
    bgColor: t("DrvCTA.bgColor"),
    textColor: t("DrvCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("DrvCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
