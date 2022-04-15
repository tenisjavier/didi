import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const SafetyHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("SafetyHero.title"),
    desc: t("SafetyHero.desc"),
    textColor: t("SafetyHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("SafetyHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyHero;
