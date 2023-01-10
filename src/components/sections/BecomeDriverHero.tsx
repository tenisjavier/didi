import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface BecomeDriverHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const BecomeDriverHero = ({ bgImage }: BecomeDriverHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("BecomeDriverHero.title"),
    desc: t("BecomeDriverHero.desc"),
    textColor: t("BecomeDriverHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default BecomeDriverHero;
