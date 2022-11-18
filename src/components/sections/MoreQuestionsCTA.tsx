import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface MoreQuestionsCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const MoreQuestionsCTA = ({ image }: MoreQuestionsCTAProps) => {
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
