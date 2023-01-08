import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PrivacyCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PrivacyCTA = ({ image }: PrivacyCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PrivacyCTA.title"),
    textColor: t("PrivacyCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("PrivacyCTA.btnMode"),
    btnText: "Políticas de Privacidad",
    btnLink: "#",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PrivacyCTA;
