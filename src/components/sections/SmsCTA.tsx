import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SmsCTAProps {
  smsType: string;
  qr: React.ReactNode;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SmsCTA = ({ image, qr, smsType }: SmsCTAProps) => {
  const smsTitle = smsType === "food" ? t("FoodSmsCTA.title") : t("RidesSmsCTA.title");
  const  smsDesc = smsType === "food" ? t("FoodSmsCTA.desc") : t("RidesSmsCTA.desc");
  const props: CTAProps = {
    hero: false,
    title: smsTitle,
    desc: smsDesc,
    bgColor: t("SmsCTA.bgColor"),
    textColor: t("SmsCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-80 xl:w-100 mt-20 rounded",
    btnMode: t("SmsCTA.btnMode"),
    btnType: smsType ? "RidesSmsCTA" : "FoodSmsCTA",
    smsFormTitle: t("SmsCTA.formTitle"),
    reverse: false,
    qr: qr
  };
  return <CTASection {...props}></CTASection>;
};

export default SmsCTA;