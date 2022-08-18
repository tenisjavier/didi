import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface AboutHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutHeroRTL = ({ bgImage }: AboutHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("AboutHeroRTL.title"),
    desc: t("AboutHeroRTL.desc"),
    textColor: t("AboutHeroRTL.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("AboutHeroRTL.btnMode"),
    btnType: "both",
    reverse: true
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutHeroRTL;
