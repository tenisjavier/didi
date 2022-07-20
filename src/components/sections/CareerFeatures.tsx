import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const CareerFeatures = ({ image }: DrvFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("CareerFeatures.title"),
    bullets: t("CareerFeatures.bullets", { returnObjects: true }),
    textColor: t("CareerFeatures.textColor"),
    bgColor: t("CareerFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default CareerFeatures;
