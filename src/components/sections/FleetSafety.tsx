import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetSafetyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetSafety = ({ image }: FleetSafetyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetSafety.title"),
    desc: t("FleetSafety.desc"),
    bullets: t("FleetSafety.bullets", { returnObjects: true }),
    bgColor: t("FleetSafety.bgColor"),
    textColor: t("FleetSafety.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetSafety;
