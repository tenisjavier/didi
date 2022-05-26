import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DrvCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DrvCTA.title"),
    desc: t("DrvCTA.desc"),
    bullets: t("DrvCTA.bullets", { returnObjects: true }),
    bgColor: t("DrvCTA.bgColor"),
    textColor: t("DrvCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DrvCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
