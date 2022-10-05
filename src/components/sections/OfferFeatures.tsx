import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface OfferFeaturesProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const OfferFeatures = ({ title, desc, image }: OfferFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: t("OfferFeatures.textColor"),
    bgColor: t("OfferFeatures.bgColor"),
    btnMode: t("OfferFeatures.btnMode"),
    btnText: t("OfferFeatures.btnText"),
    btnLink: t("OfferFeatures.btnLink"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-64"
      ></GatsbyImage>
    ),

    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default OfferFeatures;
