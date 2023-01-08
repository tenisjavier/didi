import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerLoginCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvPartnerLoginCTA = ({ image }: DrvPartnerLoginCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerLoginCTA.title"),
    desc: t("DrvPartnerLoginCTA.desc"),
    textColor: t("DrvPartnerLoginCTA.textColor"),
    btnType: "drv",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerLoginCTA;
