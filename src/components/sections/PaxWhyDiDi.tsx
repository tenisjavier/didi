import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxWhyDiDiProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PaxWhyDiDi = ({ image }: PaxWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxWhyDiDi.title"),
    bullets: t("PaxWhyDiDi.bullets", { returnObjects: true }),
    desc: t("PaxWhyDiDi.desc"),
    bgColor: t("PaxWhyDiDi.bgColor"),
    textColor: t("PaxWhyDiDi.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDi;
