import React from "react";
import { getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiWhyDiDi {
  image: any;
}

const TaxiWhyDidi = ({ image }: TaxiWhyDiDi) => {
  const imageData = {
    title: "DiDi Taxi",
    description: "DiDi Taxi",
    gatsbyImageData: getImage(image),
  };
  const props: CTAProps = {
    hero: false,
    title: t("TaxiWhyDiDi.title"),
    bullets: t("TaxiWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("TaxiWhyDiDi.textColor"),
    image: imageData,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("TaxiWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiWhyDidi;
