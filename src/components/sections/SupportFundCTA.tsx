import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SupportFundCTAProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SupportFundCTA = ({ bgImage, image }: SupportFundCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SupportFundCTA.title"),
    desc: t("SupportFundCTA.desc"),
    textColor: t("SupportFundCTA.textColor"),
    bgColor: t("SupportFundCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SupportFundCTA;
