import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiMujerFuncionCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiMujerFuncionCTA = ({ image }: DiDiMujerFuncionCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("DiDiMujerFuncionCTA.title"),
    desc: t("DiDiMujerFuncionCTA.desc"),
    textColor: t("DiDiMujerFuncionCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiMujerFuncionCTA;
