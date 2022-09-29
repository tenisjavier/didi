import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayWhyDiDi = ({ image }: DiDiPayWhyDiDiProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayWhyDiDi.title"),
    desc: t("DiDiPayWhyDiDi.desc"),
    textColor: t("DiDiPayWhyDiDi.textColor"),
    bgColor: t("DiDiPayWhyDiDi.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiPayWhyDiDi.btnMode"),
    btnType: "payment",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayWhyDiDi;
