import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutGlobalCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutGlobalCTA = ({ image }: AboutGlobalCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("AboutGlobalCTA.title"),
    desc: t("AboutGlobalCTA.desc"),
    textColor: t("AboutGlobalCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("AboutGlobalCTA.btnMode"),
    btnText: t("AboutGlobalCTA.btnText"),
    btnLink: t("AboutGlobalCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutGlobalCTA;
