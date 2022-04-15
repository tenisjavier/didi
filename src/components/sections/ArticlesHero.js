import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const ArticlesHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("ArticlesHero.title"),
    desc: t("ArticlesHero.desc"),
    textColor: t("ArticlesHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("ArticlesHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default ArticlesHero;
