import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DeliveryWhyDiDi = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DeliveryWhyDiDi.title"),
    desc: t("DeliveryWhyDiDi.desc"),
    textColor: t("DeliveryWhyDiDi.textColor"),
    bgColor: t("DeliveryWhyDiDi.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryWhyDiDi;
