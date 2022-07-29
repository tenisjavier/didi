import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface AboutWomenDrvCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutWomenDrvCTA = ({ image }: AboutWomenDrvCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("AboutWomenDrvCTA.title"),
    bullets: t("AboutWomenDrvCTA.bullets", { returnObjects: true }),
    bgColor: t("AboutWomenDrvCTA.bgColor"),
    textColor: t("AboutWomenDrvCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("AboutWomenDrvCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutWomenDrvCTA;
