import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface SafetyCTAProps {
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

const SafetyCTARTL = ({ bgImage, image }: SafetyCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyCTARTL.title"),
    desc: t("SafetyCTARTL.desc"),
    textColor: t("SafetyCTARTL.textColor"),
    bgColor: t("SafetyCTARTL.bgColor"),
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
          className="z-10 m-4"
        ></GatsbyImage>
      ),
    }),

    btnText: t("SafetyCTARTL.btnText"),
    btnLink: t("SafetyCTARTL.btnLink"),
    btnMode: t("SafetyCTARTL.btnMode"),
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTARTL;
