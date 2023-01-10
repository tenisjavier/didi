import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutCountryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutCountryCTA = ({ image }: AboutCountryCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("AboutCountryCTA.title"),
    desc: t("AboutCountryCTA.desc"),
    bullets: t("AboutCountryCTA.bullets", { returnObjects: true }),
    bgColor: t("AboutCountryCTA.bgColor"),
    textColor: t("AboutCountryCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("AboutCountryCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutCountryCTA;
