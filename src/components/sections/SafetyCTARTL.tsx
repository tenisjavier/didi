import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

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
      bgImage: bgImage,
    }),
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
    }),
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnText: t("SafetyCTARTL.btnText"),
    btnLink: t("SafetyCTARTL.btnLink"),
    btnMode: t("SafetyCTARTL.btnMode"),
    reverse: false,
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTARTL;
