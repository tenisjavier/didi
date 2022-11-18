import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayEnterpriseWhyProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayEnterpriseWhy = ({ image }: DiDiPayEnterpriseWhyProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiPayEnterpriseWhy.title"),
    desc: t("DiDiPayEnterpriseWhy.desc"),
    textColor: t("DiDiPayEnterpriseWhy.textColor"),
    bgColor: t("DiDiPayEnterpriseWhy.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiPayEnterpriseWhy.btnMode"),
    btnLink: t("DiDiPayEnterpriseWhy.btnLink"),
    btnText: t("DiDiPayEnterpriseWhy.btnText"),
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayEnterpriseWhy;
