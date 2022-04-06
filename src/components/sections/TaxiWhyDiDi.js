import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const TaxiWhyDidi = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("TaxiWhyDiDi.title"),
    bullets: t("TaxiWhyDiDi.bullets", { returnObjects: true }),
    textColor: t("TaxiWhyDiDi.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("TaxiWhyDiDi.btnMode"),
    btnType: "drv",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiWhyDidi;
