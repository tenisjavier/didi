import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface AboutCountryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutCountryCTA = ({ image }: AboutCountryCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("AboutCountryCTA.title"),
    desc: t("AboutCountryCTA.desc"),
    bullets: t("AboutCountryCTA.bullets", { returnObjects: true }),
    bgColor: t("AboutCountryCTA.bgColor"),
    textColor: t("AboutCountryCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("AboutCountryCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutCountryCTA;
