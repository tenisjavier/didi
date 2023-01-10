import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface InsuranceCoverageCTAProps {
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

const InsuranceCoverageCTA = ({
  bgImage,
  image,
}: InsuranceCoverageCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("InsuranceCoverageCTA.title"),
    desc: t("InsuranceCoverageCTA.desc"),
    textColor: t("InsuranceCoverageCTA.textColor"),
    bgColor: t("InsuranceCoverageCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
  };
  return <CTASection {...props}></CTASection>;
};

export default InsuranceCoverageCTA;
