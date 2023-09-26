import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface DiDiCreditRequirementsProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiCreditRequirements = ({ image }: DiDiCreditRequirementsProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiCreditRequirements.title"),
    desc: t("DiDiCreditRequirements.desc"),
    bullets: t("DiDiCreditRequirements.bullets", { returnObjects: true }),
    textColor: t("DiDiCreditRequirements.textColor"),
    bgColor: t("DiDiCreditRequirements.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110",
    btnMode: t("DiDiCreditRequirements.btnMode"),
    btnType: "card",
    icon: faCheck,
    customBulletIcon: true,
    textHighlighterConfig: {
      hasTextHighlighter: true,
    },
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditRequirements;
