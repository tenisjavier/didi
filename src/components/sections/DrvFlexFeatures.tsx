import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFlexFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvFlexFeatures = ({ image }: DrvFlexFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvFlexFeatures.title"),
    bullets: t("DrvFlexFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvFlexFeatures.textColor"),
    bgColor: t("DrvFlexFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),
    btnMode: t("DrvFlexFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFlexFeatures;
