import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface DiDiExtraPlusChangePointsProps {
  image?: ImageDataType
}

const DiDiExtraPlusChangePoints = ({ image }: DiDiExtraPlusChangePointsProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiExtraPlusChangePoints.title"),
    desc: t("DiDiExtraPlusChangePoints.desc"),
    textColor: t("DiDiExtraPlusChangePoints.textColor"),
    bgColor: t("DiDiExtraPlusChangePoints.bgColor"),
    image: image,
    imageStyle: "!z-10 m-4 w-128",
    btnMode: t("DiDiExtraPlusChangePoints.btnMode"),
    btnText: t("DiDiExtraPlusChangePoints.btnText"),
    btnLink: t("DiDiExtraPlusChangePoints.btnLink"),
    reverse: true,
    bullets: t("DiDiExtraPlusChangePoints.bullets", { returnObjects: true }),
    hasTextHighlighterBullets: true,
  };
  return <CTASection {...props}></CTASection>
};

export default DiDiExtraPlusChangePoints;
