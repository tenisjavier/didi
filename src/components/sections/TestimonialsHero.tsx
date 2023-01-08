import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TestimonialsHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TestimonialsHero = ({ bgImage }: TestimonialsHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TestimonialsHero.title"),
    desc: t("TestimonialsHero.desc"),
    textColor: t("TestimonialsHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block !object-top",
    btnMode: t("TestimonialsHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TestimonialsHero;
