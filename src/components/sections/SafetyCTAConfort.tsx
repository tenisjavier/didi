import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyCTAProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyCTAConfort = ({ bgImage, image }: SafetyCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyCTAConfort.title"),
    desc: t("SafetyCTAConfort.desc"),
    bullets: t("SafetyCTAConfort.bullets", { returnObjects: true }),
    textColor: t("SafetyCTA.textColor"),
    bgColor: t("SafetyCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100",

    btnText: t("SafetyCTA.btnText"),
    btnLink: t("SafetyCTA.btnLink"),
    btnMode: t("SafetyCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTAConfort;