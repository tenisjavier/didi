import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const CovidCTA = ({ bgImage }: CovidCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidCTA.title"),
    desc: t("CovidCTA.desc"),
    textColor: t("CovidCTA.textColor"),
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

export default CovidCTA;
