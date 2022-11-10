import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PoliciesHeroProp {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  title: string;
}

const PoliciesHero = ({ bgImage, title }: PoliciesHeroProp) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: title || t("PoliciesHero.title"),
    desc: t("PoliciesHero.desc"),
    textColor: t("PoliciesHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default PoliciesHero;
