import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const LegalCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("LegalCTA.title"),
    textColor: t("LegalCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("LegalCTA.btnMode"),
    btnText: "Políticas de Privacidad",
    btnLink: "#",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalCTA;
