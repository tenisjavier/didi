import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxWhyDiDi = ({ image }: PaxWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxWhyDiDi.title"),
    bullets: t("PaxWhyDiDi.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDi.desc"),
    bgColor: t("PaxWhyDiDi.bgColor"),
    textColor: t("PaxWhyDiDi.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDi;
