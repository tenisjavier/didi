import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxWhyDiDiMotoProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxWhyDiDiMoto = ({ image }: PaxWhyDiDiMotoProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxWhyDiDiMoto.title"),
    bullets: t("PaxWhyDiDiMoto.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDiMoto.desc"),
    bgColor: t("PaxWhyDiDiMoto.bgColor"),
    textColor: t("PaxWhyDiDiMoto.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
    btnText :"Descarga DiDi Moto",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDiMoto;
