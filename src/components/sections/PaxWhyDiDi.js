import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import CTASection from "../CTASection";

const PaxWhyDiDi = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PaxWhyDiDi.title"),
    bullets: t("PaxWhyDiDi.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDi.desc"),
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDi;
