import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxCTA = ({ image }: PaxCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxCTA.title"),
    desc: t("PaxCTA.desc"),
    bullets: t("PaxCTA.bullets", { returnObjects: true }),
    textColor: t("PaxCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("PaxCTA.btnMode"),
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
