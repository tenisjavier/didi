import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface PaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxHeroRTL = ({ bgImage }: PaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PaxHeroRTL.title"),
    desc: t("PaxHeroRTL.desc"),
    textColor: t("PaxHeroRTL.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("PaxHeroRTL.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHeroRTL;
