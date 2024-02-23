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

const PaxWhyDiDiRepartidor = ({ image }: PaxWhyDiDiRepartidorProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxWhyDiDiRepartidor.title"),
    bullets: t("PaxWhyDiDiRepartidor.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDiRepartidor.desc"),
    bgColor: t("PaxWhyDiDiRepartidor.bgColor"),
    textColor: t("PaxWhyDiDiRepartidor.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-110 h-100",
    btnMode: t("PaxWhyDiDiRepartidor.btnMode"),
    btnLink: t("PaxWhyDiDiRepartidor.btnLink"),
    btnText: "Regístrate como Repartidor",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDiRepartidor;
