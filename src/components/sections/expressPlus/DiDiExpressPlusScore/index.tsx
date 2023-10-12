import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiExpressPlusScoreProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiExpressPlusScore = ({ image }: DiDiExpressPlusScoreProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiExtraPlusScore.title"),
    desc: t("DiDiExtraPlusScore.desc"),
    textColor: t("DiDiExtraPlusScore.textColor"),
    bgColor: t("DiDiExtraPlusScore.bgColor"),
    image: image,
    imageStyle: "!z-10 m-4 w-128",
    btnMode: t("DiDiExtraPlusScore.btnMode"),
    btnText: t("DiDiExtraPlusScore.btnText"),
    btnLink: t("DiDiExtraPlusScore.btnLink"),
    reverse: true,
    bullets: t("DiDiExtraPlusScore.bullets", { returnObjects: true })
  };
  return (
    <CTASection {...props}></CTASection>
  );
};

export default DiDiExpressPlusScore;
