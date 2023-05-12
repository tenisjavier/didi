import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayBusinessCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayBusinessCTA = ({ image }: DiDiPayBusinessCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayBusinessCTA.title"),
    desc: t("DiDiPayBusinessCTA.desc"),
    textColor: t("DiDiPayBusinessCTA.textColor"),
    bgColor: t("DiDiPayBusinessCTA.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DiDiPayBusinessCTA.btnMode"),
    btnLink: t("DiDiPayBusinessCTA.btnLink"),
    btnText: t("DiDiPayBusinessCTA.btnText"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayBusinessCTA;
