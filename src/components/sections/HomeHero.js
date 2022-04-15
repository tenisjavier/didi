import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const HomeHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("HomeHero.btnMode"),
    btnType: "both",
    alignItems: "items-start",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
