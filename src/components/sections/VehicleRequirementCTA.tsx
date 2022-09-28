import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface VehicleRequirementCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const VehicleRequirementCTA = ({ image }: VehicleRequirementCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("VehicleRequirementCTA.title"),
    desc: t("VehicleRequirementCTA.desc"),
    textColor: t("VehicleRequirementCTA.textColor"),
    bgColor: t("VehicleRequirementCTA.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("VehicleRequirementCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default VehicleRequirementCTA;
