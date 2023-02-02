import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPrestamosFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPrestamosFeatures = ({ image }: DiDiPrestamosFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPrestamosFeatures.title"),
    desc: t("DiDiPrestamosFeatures.desc"),
    textColor: t("DiDiPrestamosFeatures.textColor"),
    bgColor: t("DiDiPrestamosFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110",
    btnMode: t("DiDiPrestamosFeatures.btnMode"),
    btnType: "prestamos",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPrestamosFeatures;
