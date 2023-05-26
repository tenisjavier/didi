import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface DiDiPayPhoneFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayPhoneFeatures = ({ image }: DiDiPayPhoneFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayPhoneFeatures.title"),
    desc: t("DiDiPayPhoneFeatures.desc"),
    bullets: t("DiDiPayPhoneFeatures.bullets", { returnObjects: true }),
    customBulletIcon: true,
    icon: faCheck,
    textColor: t("DiDiPayPhoneFeatures.textColor"),
    bgColor: t("DiDiPayPhoneFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DiDiPayPhoneFeatures.btnMode"),
    btnType: "payment",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayPhoneFeatures;
