import React from "react";
import { getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiGI {
  image: any;
}

const TaxiGI = ({ image }: TaxiGI) => {
  const imageData = {
    title: "DiDi Taxi",
    description: "DiDi Taxi",
    gatsbyImageData: getImage(image),
  };
  const props: CTAProps = {
    hero: false,
    title: t("TaxiGI.title"),
    desc: t("TaxiGI.desc"),
    textColor: t("TaxiGI.textColor"),
    bgColor: t("TaxiGI.bgColor"),
    image: imageData,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("TaxiGI.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiGI;
