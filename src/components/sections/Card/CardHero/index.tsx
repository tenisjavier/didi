import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface CardHeroProps {
  image?: ImageDataType;
}

const CardHero = ({ image }: CardHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("CardHero.title"),
    desc: t("CardHero.desc"),
    textColor: t("CardHero.textColor"),
    bgColor: t("CardHero.bgColor"),
    btnMode: t("CardHero.btnMode"),
    btnType: "pax",
    btnText: 'Solicitar en DiDi app',
    imageStyle: "z-10 m-4 w-105 rounded",
    image,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default CardHero;
