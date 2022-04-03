import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const SafetyCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("SafetyCTA.title"),
    desc: t("SafetyCTA.desc"),
    textColor: t("SafetyCTA.textColor"),
    bgColor: t("SafetyCTA.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4"
      ></GatsbyImage>
    ),

    btnText: t("SafetyCTA.btnText"),
    btnLink: t("SafetyCTA.btnLink"),
    btnMode: t("SafetyCTA.btnMode"),
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTA;
