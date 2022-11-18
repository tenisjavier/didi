import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFeatures {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvFeatures = ({ image }: DrvFeatures) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvFeatures.title"),
    bullets: t("DrvFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvFeatures.textColor"),
    bgColor: t("DrvFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),
    btnMode: t("DrvFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFeatures;
