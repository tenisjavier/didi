import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiMujerFuncionCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiMujerFuncionCTA = ({ image }: DiDiMujerFuncionCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiMujerFuncionCTA.title"),
    desc: t("DiDiMujerFuncionCTA.desc"),
    textColor: t("DiDiMujerFuncionCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiMujerFuncionCTA;
