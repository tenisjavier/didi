import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutCountryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutCountryCTARTL = ({ image }: AboutCountryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("AboutCountryCTARTL.title"),
    desc: t("AboutCountryCTARTL.desc"),
    bullets: t("AboutCountryCTARTL.bullets", { returnObjects: true }),
    bgColor: t("AboutCountryCTARTL.bgColor"),
    textColor: t("AboutCountryCTARTL.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("AboutCountryCTARTL.btnMode"),
    btnType: "drv",
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutCountryCTARTL;
