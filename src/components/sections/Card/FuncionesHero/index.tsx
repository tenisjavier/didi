import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";
import { ImageDataType } from "../../../Image";

interface FuncionesHeroProps {
  image?: ImageDataType;
}

const FuncionesHero = ({ image }: FuncionesHeroProps) => {
  const props: CTAFullSectionProps = {
    colOne: {
      title: t("FuncionesHero.title"),
      desc: t("FuncionesHero.desc"),
      textColor: 'text-white',
      bgColorCard: 'bg-orange-primary',
    },
    colTwo: {
      image: image,
      type: "imageCard",
      imageStyle: "z-10 m-4 w-[360px]"
    }
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default FuncionesHero;
