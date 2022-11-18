import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface WomenDiDiCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const WomenDiDiCTA = ({ image }: WomenDiDiCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("WomenDiDiCTA.title"),
    desc: t("WomenDiDiCTA.desc"),
    bullets: t("WomenDiDiCTA.bullets", { returnObjects: true }),
    bgColor: t("WomenDiDiCTA.bgColor"),
    textColor: t("WomenDiDiCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("WomenDiDiCTA.btnMode"),
    btnText: t("WomenDiDiCTA.btnText"),
    btnLink: t("WomenDiDiCTA.btnLink"),
    reverse: t("WomenDiDiCTA.reverse"),
  };
  return <CTASection {...props}></CTASection>;
};

export default WomenDiDiCTA;
