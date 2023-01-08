import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvWhyDiDi = ({ image }: DrvWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvWhyDiDi.title"),
    bullets: t("DrvWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("DrvWhyDiDi.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("DrvWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvWhyDiDi;
