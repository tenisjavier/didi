import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface DiDiCreditFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiCreditFeatures = ({ image }: DiDiCreditFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiCreditFeatures.title"),
    desc: t("DiDiCreditFeatures.desc"),
    bullets: t("DiDiCreditFeatures.bullets", { returnObjects: true }),
    textColor: t("DiDiCreditFeatures.textColor"),
    bgColor: t("DiDiCreditFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110",
    btnMode: t("DiDiCreditFeatures.btnMode"),
    btnType: "card",
    reverse: true,
    icon: faArrowRight,
    customBulletIcon: true,
    textHighlighterConfig: {
      hasTextHighlighter: true,
    },
    hasTextHighlighterBullets: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditFeatures;
