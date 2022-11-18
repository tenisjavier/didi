import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface HelpCenterHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const HelpCenterHeroRTL = ({ bgImage }: HelpCenterHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HelpCenterHeroRTL.title"),
    desc: t("HelpCenterHeroRTL.desc"),
    textColor: t("HelpCenterHeroRTL.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("HelpCenterHeroRTL.btnMode"),
    btnType: "both",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHeroRTL;
