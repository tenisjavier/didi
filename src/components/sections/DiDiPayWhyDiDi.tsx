import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayWhyDiDi = ({ image }: DiDiPayWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayWhyDiDi.title"),
    desc: t("DiDiPayWhyDiDi.desc"),
    textColor: t("DiDiPayWhyDiDi.textColor"),
    bgColor: t("DiDiPayWhyDiDi.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DiDiPayWhyDiDi.btnMode"),
    btnType: "payment",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayWhyDiDi;
