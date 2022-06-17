import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface LegalHeroProp {
  bgImage: any;
}

const LegalHero = ({ bgImage }: LegalHeroProp) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("LegalHero.title"),
    desc: t("LegalHero.desc"),
    textColor: t("LegalHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("LegalHero.btnMode"),
    btnText: "Términos y Condiciones",
    btnLink: t("LegalHero.linkItem"),
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalHero;
