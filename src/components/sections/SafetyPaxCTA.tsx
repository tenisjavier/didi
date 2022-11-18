import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyPaxCTAProps {
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

const SafetyPaxCTA = ({ bgImage, image }: SafetyPaxCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyPaxCTA.title"),
    desc: t("SafetyPaxCTA.desc"),
    textColor: t("SafetyPaxCTA.textColor"),
    bgColor: t("SafetyPaxCTA.bgColor"),
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

    btnText: t("SafetyPaxCTA.btnText"),
    btnLink: t("SafetyPaxCTA.btnLink"),
    btnMode: t("SafetyPaxCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyPaxCTA;
