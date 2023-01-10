import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutHero = ({ bgImage }: AboutHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("AboutHero.title"),
    desc: t("AboutHero.desc"),
    textColor: t("AboutHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("AboutHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutHero;
