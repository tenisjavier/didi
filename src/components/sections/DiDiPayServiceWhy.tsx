import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayServiceWhyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayServiceWhy = ({ image }: DiDiPayServiceWhyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayServiceWhy.title"),
    desc: t("DiDiPayServiceWhy.desc"),
    textColor: t("DiDiPayServiceWhy.textColor"),
    bgColor: t("DiDiPayServiceWhy.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayServiceWhy;
