import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";

interface BeneficiosHeroProps {
  image?: ImageDataType;
}

const BeneficiosHero = ({ image }: BeneficiosHeroProps) => {
  const props: CTAFullSectionProps = {
    colOne: {
      title: t("BeneficiosHero.title"),
      textColor: 'text-white',
      bgColorCard: 'bg-orange-primary',
    },
    colTwo: {
      imageStyle: "z-10 m-4 w-105 rounded",
      image: image,
      type: 'imageCard'
    },

  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default BeneficiosHero;
