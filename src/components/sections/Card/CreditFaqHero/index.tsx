import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";
import { ImageDataType } from "../../../Image";

interface CreditFaqHeroProps {
  image?: ImageDataType;
}

const CreditFaqHero = ({ image }: CreditFaqHeroProps) => {
  const props: CTAFullSectionProps = {
    colOne: {
      title: t("CreditFaqHero.title"),
      textColor: 'text-white',
      bgColorCard: t("CreditFaqHero.bgColor"),
    },
    colTwo: {
      image: image,
      type: 'imageCard'
    }
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default CreditFaqHero;
