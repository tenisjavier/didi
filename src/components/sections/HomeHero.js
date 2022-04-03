import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";
import { useTranslation } from "gatsby-plugin-react-i18next";

const HomeHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    title: t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnType: t("HomeHero.btnType"),
    btnMode: t("HomeHero.btnMode"),
    alignItems: t("HomeHero.alignItems"),
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
