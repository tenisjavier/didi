import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface LegalCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const LegalCTA = ({ image }: LegalCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("LegalCTA.title"),
    textColor: t("LegalCTA.textColor"),
    desc: t("LegalCTA.desc"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("LegalCTA.btnMode"),
    btnText: "Saber sobre la Ley",
    btnLink: "/cl/legal/ley-nueva-conductores-apps/",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default LegalCTA;
