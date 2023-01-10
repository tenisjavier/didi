import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface EducationalGuideFoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const EducationalGuideFoodHero = ({
  bgImage,
}: EducationalGuideFoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("EducationalGuideFoodHero.title"),
    desc: t("EducationalGuideFoodHero.desc"),
    textColor: t("EducationalGuideFoodHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default EducationalGuideFoodHero;
