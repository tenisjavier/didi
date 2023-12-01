import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxCTAApp {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxCTAApp = ({ image }: PaxCTAApp) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxCTAApp.title"),
    desc: t("PaxCTAApp.desc"),
    bullets: t("PaxCTAApp.bullets", { returnObjects: true }),
    textColor: t("PaxCTAApp.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTAApp;
