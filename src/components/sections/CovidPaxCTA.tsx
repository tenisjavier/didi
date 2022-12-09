import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidPaxCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const CovidPaxCTA = ({ bgImage }: CovidPaxCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidPaxCTA.title"),
    desc: t("CovidPaxCTA.desc"),
    textColor: t("CovidPaxCTA.textColor"),
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

export default CovidPaxCTA;
