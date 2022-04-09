import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DiDiMasCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DiDiMasCTA.title"),
    desc: t("DiDiMasCTA.desc"),
    textColor: t("DiDiMasCTA.textColor"),
    bgColor: t("DiDiMasCTA.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiMasCTA.btnMode"),
    btnType: "drv",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiMasCTA;
