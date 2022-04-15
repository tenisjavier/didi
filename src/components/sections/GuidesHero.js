import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DrvHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("GuidesHero.title"),
    desc: t("GuidesHero.desc"),
    textColor: t("DrvHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnType: t("GuidesHero.btnType"),
    btnMode: t("GuidesHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHero;
