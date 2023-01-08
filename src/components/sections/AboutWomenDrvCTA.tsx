import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutWomenDrvCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutWomenDrvCTA = ({ image }: AboutWomenDrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("AboutWomenDrvCTA.title"),
    bullets: t("AboutWomenDrvCTA.bullets", { returnObjects: true }),
    bgColor: t("AboutWomenDrvCTA.bgColor"),
    textColor: t("AboutWomenDrvCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("AboutWomenDrvCTA.btnMode"),
    btnType: "drv",
    reverse: t("AboutWomenDrvCTA.reverse"),
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutWomenDrvCTA;
