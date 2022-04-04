import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DrvCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DrvCTA.title"),
    desc: t("DrvCTA.desc"),
    bgColor: t("DrvCTA.bgColor"),
    textColor: t("DrvCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnType: t("DrvCTA.btnType"),
    btnMode: t("DrvCTA.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
