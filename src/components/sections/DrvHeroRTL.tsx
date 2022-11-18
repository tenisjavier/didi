import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASectionRTL";

interface DrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvHeroRTL = ({ bgImage }: DrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvHeroRTL.title"),
    desc: t("DrvHeroRTL.desc"),
    textColor: t("DrvHeroRTL.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("DrvHeroRTL.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHeroRTL;
