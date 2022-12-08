import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidDrvCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const CovidDrvCTA = ({ bgImage }: CovidDrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidDrvCTA.title"),
    desc: t("CovidDrvCTA.desc"),
    textColor: t("CovidDrvCTA.textColor"),
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

export default CovidDrvCTA;
