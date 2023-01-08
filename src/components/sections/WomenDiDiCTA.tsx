import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface WomenDiDiCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const WomenDiDiCTA = ({ image }: WomenDiDiCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("WomenDiDiCTA.title"),
    desc: t("WomenDiDiCTA.desc"),
    bullets: t("WomenDiDiCTA.bullets", { returnObjects: true }),
    bgColor: t("WomenDiDiCTA.bgColor"),
    textColor: t("WomenDiDiCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("WomenDiDiCTA.btnMode"),
    btnText: t("WomenDiDiCTA.btnText"),
    btnLink: t("WomenDiDiCTA.btnLink"),
    reverse: t("WomenDiDiCTA.reverse"),
  };
  return <CTASection {...props}></CTASection>;
};

export default WomenDiDiCTA;
