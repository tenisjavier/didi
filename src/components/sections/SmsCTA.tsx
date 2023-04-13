import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SmsCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SmsCTA = ({ image }: SmsCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SmsCTA.title"),
    bgColor: t("SmsCTA.bgColor"),
    textColor: t("SmsCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 xl:w-100 lg:w-80 rounded",
    btnMode: t("SmsCTA.btnMode"),
    btnType: "submit",
    smsFormTitle: t("SmsCTA.formTitle"),
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default SmsCTA;