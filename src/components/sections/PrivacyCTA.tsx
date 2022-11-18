import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PrivacyCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PrivacyCTA = ({ image }: PrivacyCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PrivacyCTA.title"),
    textColor: t("PrivacyCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PrivacyCTA.btnMode"),
    btnText: "Políticas de Privacidad",
    btnLink: "#",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PrivacyCTA;
