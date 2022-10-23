import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayEnterpriseHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayEnterpriseHero = ({
  bgImage,
  image,
}: DiDiPayEnterpriseHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayEnterpriseHero.title"),
    desc: t("DiDiPayEnterpriseHero.desc"),
    textColor: t("DiDiPayEnterpriseHero.textColor"),
    bgColor: t("DiDiPayEnterpriseHero.bgColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-90"
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="!z-10 m-4 w-100"
        ></GatsbyImage>
      ),
      reverse: true,
    }),
    btnMode: t("DiDiPayEnterpriseHero.btnMode"),
    btnType: "paymentBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayEnterpriseHero;
