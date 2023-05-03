import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface EntregaHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const EntregaHero = ({ bgImage }: EntregaHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("EntregaHero.title"),
    desc: t("EntregaHero.desc"),
    textColor: t("EntregaHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90  md:block",
    btnMode: t("EntregaHero.btnMode"),
    btnType: "entrega",
  };
  return <CTASection {...props}></CTASection>;
};

export default EntregaHero;
