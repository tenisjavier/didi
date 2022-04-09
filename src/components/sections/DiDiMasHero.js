import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const TaxiHero = ({ bgImage, image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DiDiMasHero.title"),
    desc: t("DiDiMasHero.desc"),
    textColor: t("DiDiMasHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiMasHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiHero;
