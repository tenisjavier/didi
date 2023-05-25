import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface DiDiPayGiftcardFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayGiftcardFeatures = ({ image }: DiDiPayGiftcardFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayGiftcardFeatures.title"),
    desc: t("DiDiPayGiftcardFeatures.desc"),
    bullets: t("DiDiPayGiftcardFeatures.bullets", { returnObjects: true }),
    customBulletIcon: true,
    icon: faCheck,
    textColor: t("DiDiPayGiftcardFeatures.textColor"),
    bgColor: t("DiDiPayGiftcardFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DiDiPayGiftcardFeatures.btnMode"),
    btnType: "payment",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayGiftcardFeatures;
