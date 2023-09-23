import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";
import { ImageDataType } from "../../../Image";

interface SolicitaCTAProps {
  image?: ImageDataType;
}

const SolicitaCTA = ({ image }: SolicitaCTAProps) => {

  const props: CTAFullSectionProps = {
    colOne: {
      imageStyle: "",
      image,
      type: 'imageCard',
    },
    colTwo: {
      title: t("SolicitaCTA.title"),
      bullets: {
        bullets: t("SolicitaCTA.bullets", { returnObjects: true }),
        icon: 'faCheck',
      },
    },
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default SolicitaCTA;
