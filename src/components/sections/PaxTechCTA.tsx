import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxTechCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxTechCTA = ({ image }: PaxTechCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxTechCTA.title"),
    desc: t("PaxTechCTA.desc"),
    bullets: t("PaxTechCTA.bullets", { returnObjects: true }),
    textColor: t("PaxTechCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("PaxTechCTA.btnMode"),
    btnLink: t("PaxTechCTA.btnLink"),
    btnText: t("PaxTechCTA.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxTechCTA;
