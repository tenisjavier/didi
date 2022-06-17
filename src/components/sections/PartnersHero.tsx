import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

interface PartnersHeroProps {
  bgImage: any;
  image?: any;
}

const PartnersHero = ({ bgImage, image }: PartnersHeroProps) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("PartnersHero.title"),
    desc: t("PartnersHero.desc"),
    textColor: t("PartnersHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={getImage(image)!}
          alt={image.description}
          className="z-10 m-4 w-100 rounded"
        ></GatsbyImage>
      ),
    }),
    btnMode: t("PartnersHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersHero;
