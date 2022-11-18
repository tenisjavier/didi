import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface DiDiPayEnterpriseFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  icon: IconProp;
}

const DiDiPayEnterpriseFeatures = ({
  image,
  icon,
}: DiDiPayEnterpriseFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayEnterpriseFeatures.title"),
    desc: t("DiDiPayEnterpriseFeatures.desc"),
    textColor: t("DiDiPayEnterpriseFeatures.textColor"),
    bullets: t("DiDiPayEnterpriseFeatures.bullets", { returnObjects: true }),
    customBulletIcon: true,
    icon: icon,
    bgColor: t("DiDiPayEnterpriseFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiPayEnterpriseFeatures.btnMode"),
    btnLink: t("DiDiPayEnterpriseFeatures.btnLink"),
    btnText: t("DiDiPayEnterpriseFeatures.btnText"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayEnterpriseFeatures;
