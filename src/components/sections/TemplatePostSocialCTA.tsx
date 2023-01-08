import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TemplatePostCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TemplatePostCTA = ({ image }: TemplatePostCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("TemplatePostCTA.title"),
    desc: t("TemplatePostCTA.desc"),
    bullets: t("TemplatePostCTA.bullets", { returnObjects: true }),
    bgColor: t("TemplatePostCTA.bgColor"),
    textColor: t("TemplatePostCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
  };
  return <CTASection {...props}></CTASection>;
};

export default TemplatePostCTA;
