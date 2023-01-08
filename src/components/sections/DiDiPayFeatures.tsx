import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayFeatures = ({ image }: DiDiPayFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayFeatures.title"),
    desc: t("DiDiPayFeatures.desc"),
    textColor: t("DiDiPayFeatures.textColor"),
    bgColor: t("DiDiPayFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("DiDiPayFeatures.btnMode"),
    btnType: "payment",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayFeatures;
