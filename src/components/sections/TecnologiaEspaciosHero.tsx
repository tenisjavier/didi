import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TecnologiaEspaciosHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TecnologiaEspaciosHero = ({ bgImage }: TecnologiaEspaciosHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TecnologiaEspaciosHero.title"),
    desc: t("TecnologiaEspaciosHero.desc"),
    textColor: t("TecnologiaEspaciosHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("TecnologiaEspaciosHero.btnMode"),
    btnLink: t("TecnologiaEspaciosHero.btnLink"),
    btnText: t("TecnologiaEspaciosHero.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TecnologiaEspaciosHero;
