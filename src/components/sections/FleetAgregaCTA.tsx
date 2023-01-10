import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetAgregaCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetAgregaCTA = ({ image }: FleetAgregaCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetAgregaCTA.title"),
    desc: t("FleetAgregaCTA.desc"),
    bgColor: t("FleetAgregaCTA.bgColor"),
    textColor: t("FleetAgregaCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("FleetAgregaCTA.btnMode"),
    btnText: t("FleetAgregaCTA.btnText"),
    btnLink: t("FleetAgregaCTA.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetAgregaCTA;
