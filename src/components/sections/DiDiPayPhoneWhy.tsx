import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayPhoneWhyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiPayPhoneWhy = ({ image }: DiDiPayPhoneWhyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayPhoneWhy.title"),
    desc: t("DiDiPayPhoneWhy.desc"),
    textColor: t("DiDiPayPhoneWhy.textColor"),
    bgColor: t("DiDiPayPhoneWhy.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayPhoneWhy;
