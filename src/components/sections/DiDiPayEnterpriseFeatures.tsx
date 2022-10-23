import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayEnterpriseFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayEnterpriseFeatures = ({ image }: DiDiPayEnterpriseFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayEnterpriseFeatures.title"),
    desc: t("DiDiPayEnterpriseFeatures.desc"),
    textColor: t("DiDiPayEnterpriseFeatures.textColor"),
    bgColor: t("DiDiPayEnterpriseFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiPayEnterpriseFeatures.btnMode"),
    btnType: "paymentBusiness",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayEnterpriseFeatures;
