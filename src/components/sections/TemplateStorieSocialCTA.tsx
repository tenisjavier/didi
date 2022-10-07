import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface TemplateStoriesCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TemplateStoriesCTA = ({ image }: TemplateStoriesCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("TemplateStoriesCTA.title"),
    desc: t("TemplateStoriesCTA.desc"),
    bullets: t("TemplateStoriesCTA.bullets", { returnObjects: true }),
    bgColor: t("TemplateStoriesCTA.bgColor"),
    textColor: t("TemplateStoriesCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default TemplateStoriesCTA;
