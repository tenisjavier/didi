import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface InsuranceCoverageCTAProps {
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

const InsuranceCoverageCTA = ({ bgImage, image }: InsuranceCoverageCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("InsuranceCoverageCTA.title"),
    desc: t("InsuranceCoverageCTA.desc"),
    textColor: t("InsuranceCoverageCTA.textColor"),
    bgColor: t("InsuranceCoverageCTA.bgColor"),
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
  };
  return <CTASection {...props}></CTASection>;
};

export default InsuranceCoverageCTA;