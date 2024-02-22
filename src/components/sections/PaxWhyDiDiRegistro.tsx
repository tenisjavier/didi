import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxWhyDiDiRepartidorProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxWhyDiDiRegistro = ({ image }: PaxWhyDiDiRepartidorProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxWhyDiDiRegistro.title"),
    bullets: t("PaxWhyDiDiRegistro.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDiRegistro.desc"),
    bgColor: t("PaxWhyDiDiRegistro.bgColor"),
    textColor: t("PaxWhyDiDiRegistro.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 h-130",
    // btnMode: t("PaxWhyDiDiRegistro.btnMode"),
    // btnText: "Regístrate como Repartidor",
    // btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDiRegistro;
