import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetSocioCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetSocioCTA = ({ image }: FleetSocioCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FleetSocioCTA.title"),
    desc: t("FleetSocioCTA.desc"),
    bgColor: t("FleetSocioCTA.bgColor"),
    textColor: t("FleetSocioCTA.textColor"),
    btnText: t("FleetSocioCTA.btnText"),
    btnLink: t("FleetSocioCTA.btnLink"),
    btnMode: t("FleetSocioCTA.btnMode"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetSocioCTA;
