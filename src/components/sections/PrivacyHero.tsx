import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface LegalHeroProp {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PrivacyHero = ({ bgImage }: LegalHeroProp) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("PrivacyHero.title"),
    desc: t("PrivacyHero.desc"),
    textColor: t("PrivacyHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("PrivacyHero.btnMode"),
    btnText: t("PrivacyHero.btnText"),
    btnLink: t("PrivacyHero.linkItem"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PrivacyHero;
