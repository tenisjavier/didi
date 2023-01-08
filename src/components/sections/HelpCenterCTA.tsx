import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const HelpCenterCTA = ({ image }: HelpCenterCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("HelpCenterCTA.title"),
    desc: t("HelpCenterCTA.desc"),
    textColor: t("HelpCenterCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 h-100 rounded-full",
    btnMode: t("HelpCenterCTA.btnMode"),
    btnText: t("HelpCenterCTA.btnText"),
    btnLink: t("HelpCenterCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterCTA;
