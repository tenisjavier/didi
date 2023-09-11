import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface TaxiVFEProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxiSafety = ({ image }: TaxiVFEProps) => {

  const props: CTAProps = {
    hero: false,
    title: t("TaxiSafety.title"),
    desc: t("TaxiSafety.desc"),
    bullets: t("TaxiSafety.bullets", { returnObjects: true }),
    textColor: t("TaxiSafety.textColor"),
    bgColor: t("SafetyCTA.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiSafety;
