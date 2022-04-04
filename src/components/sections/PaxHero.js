import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const PaxHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PaxHero.title"),
    textColor: t("PaxHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnType: t("PaxHero.btnType"),
    btnMode: t("PaxHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
