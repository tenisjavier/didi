import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GananciasObligacionesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const GananciasObligaciones = ({ image }: GananciasObligacionesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("GananciasObligaciones.title"),
    desc: t("GananciasObligaciones.desc"),
    bgColor: t("GananciasObligaciones.bgColor"),
    textColor: t("GananciasObligaciones.textColor"),
    btnMode: t("GananciasObligaciones.btnMode"),
    btnText: t("GananciasObligaciones.btnText"),
    btnLink: t("GananciasObligaciones.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default GananciasObligaciones;
