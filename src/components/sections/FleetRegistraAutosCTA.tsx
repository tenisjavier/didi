import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetRegistraAutosProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetRegistraAutos = ({ image }: FleetRegistraAutosProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetRegistraAutos.title"),
    desc: t("FleetRegistraAutos.desc"),
    bgColor: t("FleetRegistraAutos.bgColor"),
    textColor: t("FleetRegistraAutos.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetRegistraAutos;
