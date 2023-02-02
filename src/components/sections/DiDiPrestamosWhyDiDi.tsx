import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPrestamosWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPrestamosWhyDiDi = ({ image }: DiDiPrestamosWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPrestamosWhyDiDi.title"),
    desc: t("DiDiPrestamosWhyDiDi.desc"),
    textColor: t("DiDiPrestamosWhyDiDi.textColor"),
    bgColor: t("DiDiPrestamosWhyDiDi.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110",
    btnMode: t("DiDiPrestamosWhyDiDi.btnMode"),
    btnType: "prestamos",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPrestamosWhyDiDi;
