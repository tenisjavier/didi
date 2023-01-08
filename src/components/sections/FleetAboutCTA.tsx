import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetAboutCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetAboutCTA = ({ image }: FleetAboutCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetAboutCTA.title"),
    desc: t("FleetAboutCTA.desc"),
    bgColor: t("FleetAboutCTA.bgColor"),
    textColor: t("FleetAboutCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",

    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetAboutCTA;
