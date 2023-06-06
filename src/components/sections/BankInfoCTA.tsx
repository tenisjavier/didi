import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface BankInfoCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const BankInfoCTA = ({image}: BankInfoCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("BankInfoCTA.title"),
    desc: t("BankInfoCTA.desc"),
    textColor: t("BankInfoCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    bgColor: t("BankInfoCTA.bgColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default BankInfoCTA;
