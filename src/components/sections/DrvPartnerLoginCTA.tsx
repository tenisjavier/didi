import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerLoginCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvPartnerLoginCTA = ({ image }: DrvPartnerLoginCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerLoginCTA.title"),
    desc: t("DrvPartnerLoginCTA.desc"),
    textColor: t("DrvPartnerLoginCTA.textColor"),
    btnType: 'drv',
    btnMode: 'primary'
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerLoginCTA;
