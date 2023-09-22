import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface BlogCTAProps {
  image?: ImageDataType;
}

const TasasCTA = ({ image }: BlogCTAProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TasasCTA.title"),
    bullets: t("TasasCTA.bullets", { returnObjects: true }),
    descFooter: t("TasasCTA.descFooter", { returnObjects: true }),
    textColor: t("TasasCTA.textColor"),
    bgColor: t("TasasCTA.bgColor"),
    imageStyle: "z-10 m-4 w-105 rounded",
    image,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default TasasCTA;
