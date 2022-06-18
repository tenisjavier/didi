import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DeliveryWhyDiDi = ({ image }: DeliveryWhyDiDiProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryWhyDiDi.title"),
    desc: t("DeliveryWhyDiDi.desc"),
    textColor: t("DeliveryWhyDiDi.textColor"),
    bgColor: t("DeliveryWhyDiDi.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
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
