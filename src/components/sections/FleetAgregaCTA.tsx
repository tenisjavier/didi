import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FleetAgregaCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FleetAgregaCTA = ({ image }: FleetAgregaCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FleetAgregaCTA.title"),
    desc: t("FleetAgregaCTA.desc"),
    bgColor: t("FleetAgregaCTA.bgColor"),
    textColor: t("FleetAgregaCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("FleetAgregaCTA.btnMode"),
    btnText: t("FleetAgregaCTA.btnText"),
    btnLink: t("FleetAgregaCTA.btnLink")
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetAgregaCTA;
