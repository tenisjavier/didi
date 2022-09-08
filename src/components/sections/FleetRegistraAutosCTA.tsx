import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FleetRegistraAutosProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FleetRegistraAutos = ({ image }: FleetRegistraAutosProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FleetRegistraAutos.title"),
    desc: t("FleetRegistraAutos.desc"),
    bgColor: t("FleetRegistraAutos.bgColor"),
    textColor: t("FleetRegistraAutos.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetRegistraAutos;
