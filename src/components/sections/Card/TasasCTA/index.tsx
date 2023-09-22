import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";
import { ImageDataType } from "../../../Image";

interface TasasCTAProps {
  image?: ImageDataType;
}

const TasasCTA = ({ image }: TasasCTAProps) => {


  const props: CTAFullSectionProps = {
    colOne: {
      title: t("TasasCTA.title"),
      bullets: {
        bullets: t("TasasCTA.bullets", { returnObjects: true }),
      },
      descFooter: t("TasasCTA.descFooter", { returnObjects: true }),
      textColor: t("TasasCTA.textColor"),
      // bgCardColor: t("TasasCTA.bgColor"),
    },
    colTwo: {
      imageStyle: "z-10 m-4 w-105 rounded",
      image,
      type: 'imageCard'
    },
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default TasasCTA;
