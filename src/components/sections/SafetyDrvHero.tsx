import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyDrvHero = ({ bgImage }: SafetyDrvHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("SafetyDrvHero.title"),
    desc: t("SafetyDrvHero.desc"),
    textColor: t("SafetyDrvHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("SafetyDrvHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};


export default SafetyDrvHero;

