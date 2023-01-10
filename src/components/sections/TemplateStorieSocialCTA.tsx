import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TemplateStoriesCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const TemplateStoriesCTA = ({ image }: TemplateStoriesCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("TemplateStoriesCTA.title"),
    desc: t("TemplateStoriesCTA.desc"),
    bullets: t("TemplateStoriesCTA.bullets", { returnObjects: true }),
    bgColor: t("TemplateStoriesCTA.bgColor"),
    textColor: t("TemplateStoriesCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
  };
  return <CTASection {...props}></CTASection>;
};

export default TemplateStoriesCTA;
