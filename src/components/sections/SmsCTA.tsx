import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SmsCTAProps {
  qr: React.ReactNode;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SmsCTA = ({ image, qr }: SmsCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SmsCTA.title"),
    bgColor: t("SmsCTA.bgColor"),
    textColor: t("SmsCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-80 xl:w-100 mt-20 rounded",
    btnMode: t("SmsCTA.btnMode"),
    btnType: "smsCTA",
    smsFormTitle: t("SmsCTA.formTitle"),
    reverse: false,
    qr: qr
  };
  return <CTASection {...props}></CTASection>;
};

export default SmsCTA;