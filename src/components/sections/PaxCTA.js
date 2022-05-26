import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const PaxCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PaxCTA.title"),
    desc: t("PaxCTA.desc"),
    bullets: t("PaxCTA.bullets", { returnObjects: true }),
    textColor: t("PaxCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PaxCTA.btnMode"),
    btnType: "pax",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
