import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface AboutCountryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutCountryCTARTL = ({ image }: AboutCountryCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("AboutCountryCTARTL.title"),
    desc: t("AboutCountryCTARTL.desc"),
    bullets: t("AboutCountryCTARTL.bullets", { returnObjects: true }),
    bgColor: t("AboutCountryCTARTL.bgColor"),
    textColor: t("AboutCountryCTARTL.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("AboutCountryCTARTL.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutCountryCTARTL;
