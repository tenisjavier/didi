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

const BecomeDriverCTA = ({ image }: PaxWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("BecomeDriverCTA.title"),
    bullets: t("BecomeDriverCTA.bullets", { returnObjects: true }),
    desc: t("BecomeDriverCTA.desc"),
    bgColor: t("BecomeDriverCTA.bgColor"),
    textColor: t("BecomeDriverCTA.textColor"),
    bgImage: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default BecomeDriverCTA;
