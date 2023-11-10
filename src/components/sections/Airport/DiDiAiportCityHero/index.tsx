import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface DiDiAirportHeroProps {
  image?: ImageDataType
  cityName?: string
}

const DiDiAirporCitytHero = ({ image, cityName }: DiDiAirportHeroProps) => {


  const props: CTAProps = {
    hero: true,
    title: t("DiDiAirporCitytHero.title", { cityName: cityName }),
    desc: t("DiDiAirporCitytHero.desc"),
    textColor: t("DiDiAirporCitytHero.textColor"),
    bgColor: t("DiDiAirporCitytHero.bgColor"),
    btnMode: t("DiDiAirporCitytHero.btnMode"),
    btnType: "card",
    btnText: t("DiDiAirporCitytHero.btnText"),
    image: image,
    imageStyle: "rounded-lg z-10 m-4 lg:w-1/2 w-full",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiAirporCitytHero;
