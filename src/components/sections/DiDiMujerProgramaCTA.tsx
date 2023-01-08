import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiMujerProgramaCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiMujerProgramaCTA = ({ image }: DiDiMujerProgramaCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiMujerProgramaCTA.title"),
    desc: t("DiDiMujerProgramaCTA.desc"),
    textColor: t("DiDiMujerProgramaCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiMujerProgramaCTA;
