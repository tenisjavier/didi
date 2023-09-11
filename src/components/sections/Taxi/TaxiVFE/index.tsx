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

const TaxiVFE = ({ image }: TaxiVFEProps) => {

  const props: CTAProps = {
    hero: false,
    title: t("TaxiVFE.title"),
    desc: t("TaxiVFE.desc"),
    bullets: t("TaxiVFE.bullets", { returnObjects: true }),
    textColor: t("TaxiVFE.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiVFE;
