import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FaqHeroProps {
  title: string;
  desc: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FaqHero = ({ title, desc, bgImage }: FaqHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("FaqHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    btnMode: t("FaqHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default FaqHero;
