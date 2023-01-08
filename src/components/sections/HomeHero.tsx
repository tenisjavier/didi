import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HomeHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const HomeHero = ({ bgImage }: HomeHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block ",
    btnMode: t("HomeHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
