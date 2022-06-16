import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const PartnersCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("PartnersCTA.title"),
    desc: t("PartnersCTA.desc"),
    textColor: t("PartnersCTA.textColor"),
    bgColor: t("PartnersCTA.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        width={700}
        height={700}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PartnersCTA.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersCTA;
