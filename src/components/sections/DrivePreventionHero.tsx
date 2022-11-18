import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrivePreventionHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrivePreventionHero = ({ bgImage }: DrivePreventionHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrivePreventionHero.title"),
    desc: t("DrivePreventionHero.desc"),
    textColor: t("DrivePreventionHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrivePreventionHero;
