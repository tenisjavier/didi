import React from "react";
import { getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetWhyDiDi {
  image: any;
}

const FleetWhyDidi = ({ image }: FleetWhyDiDi) => {
  const imageData = {
    title: "DiDi Fleet",
    description: "DiDi Fleet",
    gatsbyImageData: getImage(image),
  };
  const props: CTAProps = {
    hero: false,
    title: t("FleetWhyDiDi.title"),
    bullets: t("FleetWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("FleetWhyDiDi.textColor"),
    image: imageData,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("FleetWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetWhyDidi;
