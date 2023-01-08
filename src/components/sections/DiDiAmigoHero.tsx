import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiAmigoHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiAmigoHero = ({ bgImage }: DiDiAmigoHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiAmigoHero.title"),
    desc: t("DiDiAmigoHero.desc"),
    textColor: t("DiDiAmigoHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("DiDiAmigoHero.btnMode"),
    btnText: t("DiDiAmigoHero.btnText"),
    btnLink: t("DiDiAmigoHero.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiAmigoHero;
