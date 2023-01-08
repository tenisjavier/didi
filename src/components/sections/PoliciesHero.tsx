import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PoliciesHeroProp {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  title: string;
}

const PoliciesHero = ({ bgImage, title }: PoliciesHeroProp) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("PoliciesHero.title"),
    textColor: "white",
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default PoliciesHero;
