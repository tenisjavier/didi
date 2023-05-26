import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayGiftcardWhyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}
// test commit
const DiDiPayGiftcardWhy = ({ image }: DiDiPayGiftcardWhyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayGiftcardWhy.title"),
    desc: t("DiDiPayGiftcardWhy.desc"),
    textColor: t("DiDiPayGiftcardWhy.textColor"),
    bgColor: t("DiDiPayGiftcardWhy.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayGiftcardWhy;
