import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const HelpCenterHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    title: t("HelpCenterHero.title"),
    desc: t("HelpCenterHero.desc"),
    textColor: t("HelpCenterHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("HelpCenterHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHero;
