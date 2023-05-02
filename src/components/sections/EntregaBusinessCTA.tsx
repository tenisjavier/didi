import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface EntregaBusinessCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const EntregaBusinessCTA = ({ image }: EntregaBusinessCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("EntregaBusinessCTA.title"),
    desc: t("EntregaBusinessCTA.desc"),
    bullets: t("EntregaBusinessCTA.bullets", { returnObjects: true }),
    textColor: t("EntregaBusinessCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("EntregaBusinessCTA.btnMode"),
    btnText: t("EntregaBusinessCTA.btnText"),
    btnLink: t("EntregaBusinessCTA.btnLink"),
    bgColor: t("EntregaBusinessCTA.bgColor"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default EntregaBusinessCTA;
