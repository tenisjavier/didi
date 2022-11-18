import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TemplatePostCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
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

export default TemplatePostCTA;
