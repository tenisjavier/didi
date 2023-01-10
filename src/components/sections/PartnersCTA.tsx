import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnersCTA = ({ image }: PartnersCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PartnersCTA.title"),
    desc: t("PartnersCTA.desc"),
    textColor: t("PartnersCTA.textColor"),
    bgColor: t("PartnersCTA.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnersCTA.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersCTA;
