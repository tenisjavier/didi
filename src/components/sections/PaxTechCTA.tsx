import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxTechCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PaxTechCTA = ({ image }: PaxTechCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("PaxTechCTA.title"),
    desc: t("PaxTechCTA.desc"),
    bullets: t("PaxTechCTA.bullets", { returnObjects: true }),
    textColor: t("PaxTechCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PaxTechCTA.btnMode"),
    btnLink: t("PaxTechCTA.btnLink"),
    btnText: t("PaxTechCTA.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxTechCTA;
