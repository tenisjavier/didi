import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetSocioCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FleetSocioCTA = ({ image }: FleetSocioCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetSocioCTA.title"),
    desc: t("FleetSocioCTA.desc"),
    bgColor: t("FleetSocioCTA.bgColor"),
    textColor: t("FleetSocioCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),

    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetSocioCTA;
