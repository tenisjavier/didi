import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface MoreQuestionsCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const MoreQuestionsCTA = ({ image }: MoreQuestionsCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("MoreQuestionsCTA.title"),
    desc: t("MoreQuestionsCTA.desc"),
    bullets: t("MoreQuestionsCTA.bullets", { returnObjects: true }),
    customBulletIcon: true,
    bgColor: t("MoreQuestionsCTA.bgColor"),
    textColor: t("MoreQuestionsCTA.textColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default MoreQuestionsCTA;
