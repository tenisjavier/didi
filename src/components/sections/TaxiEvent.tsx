import React from "react";
import { getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiEvent {
  image: any;
}

const TaxiEvent = ({ image }: TaxiEvent) => {
  const imageData = {
    title: "DiDi Taxi",
    description: "DiDi Taxi",
    gatsbyImageData: getImage(image),
  };
  const props: CTAProps = {
    hero: false,
    title: t("TaxiEvent.title"),
    bullets: t("TaxiEvent.bullets", { returnObjects: true }),
    bgColor: t("TaxiEvent.bgColor"),
    textColor: t("TaxiEvent.textColor"),
    image: imageData,
    imageStyle: "z-10 m-4 w-100 rounded",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiEvent;
