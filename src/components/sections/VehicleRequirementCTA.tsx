import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface VehicleRequirementCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const VehicleRequirementCTA = ({ image }: VehicleRequirementCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("VehicleRequirementCTA.title"),
    desc: t("VehicleRequirementCTA.desc"),
    textColor: t("VehicleRequirementCTA.textColor"),
    bgColor: t("VehicleRequirementCTA.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("VehicleRequirementCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default VehicleRequirementCTA;
