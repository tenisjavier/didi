import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface ProductHeroProps {
  title: string;
  desc: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ProductHero = ({ title, desc, bgImage }: ProductHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("PaxHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("PaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default ProductHero;
