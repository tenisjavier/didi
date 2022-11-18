import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvCTAProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyDrvCTA = ({ bgImage, image }: SafetyDrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyDrvCTA.title"),
    desc: t("SafetyDrvCTA.desc"),
    textColor: t("SafetyDrvCTA.textColor"),
    bgColor: t("SafetyDrvCTA.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-100 rounded-full"
        ></GatsbyImage>
      ),
    }),

    btnText: t("SafetyDrvCTA.btnText"),
    btnLink: t("SafetyDrvCTA.btnLink"),
    btnMode: t("SafetyDrvCTA.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyDrvCTA;
