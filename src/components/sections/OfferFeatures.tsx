import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface OfferFeaturesProps {
  title: string;
  desc: string;
  btnLink?: string;
  btnText?: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const OfferFeatures = ({
  title,
  desc,
  image,
  btnLink,
  btnText,
}: OfferFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: t("OfferFeatures.textColor"),
    bgColor: t("OfferFeatures.bgColor"),
    btnMode: t("OfferFeatures.btnMode"),
    btnText: btnText || t("OfferFeatures.btnText"),
    btnLink: btnLink || t("OfferFeatures.btnLink"),
    image: image,
    imageStyle: "z-10 m-4 w-64",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default OfferFeatures;
