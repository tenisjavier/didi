import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvImgHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyDrvImgHero = ({ image }: SafetyDrvImgHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyDrvImgHero.title"),
    desc: t("SafetyDrvImgHero.desc"),
    textColor: t("SafetyDrvImgHero.textColor"),
    bgColor: t("SafetyDrvImgHero.bgColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-100 rounded-full"
        ></GatsbyImage>
      ),
    }),
    btnMode: t("SafetyDrvImgHero.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyDrvImgHero;
