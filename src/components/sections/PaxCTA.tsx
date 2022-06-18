import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PaxCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PaxCTA = ({ image }: PaxCTA) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("PaxCTA.title"),
    desc: t("PaxCTA.desc"),
    bullets: t("PaxCTA.bullets", { returnObjects: true }),
    textColor: t("PaxCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PaxCTA.btnMode"),
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
