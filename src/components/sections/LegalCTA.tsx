import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface LegalCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const LegalCTA = ({ image }: LegalCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("LegalCTA.title"),
    textColor: t("LegalCTA.textColor"),
    desc: t("LegalCTA.desc"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("LegalCTA.btnMode"),
    btnText: "Saber sobre la Ley",
    btnLink: "/cl/legal/ley-nueva-conductores-apps/",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalCTA;
