import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const PaxCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PaxCTA.title"),
    desc: t("PaxCTA.desc"),
    textColor: t("PaxCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnType: t("PaxCTA.btnType"),
    btnMode: t("PaxCTA.btnMode"),
    reverse: t("PaxCTA.reverse"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
