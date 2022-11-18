import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvTypeCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvTypeCTA = ({ image }: DrvTypeCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvTypeCTA.title"),
    desc: t("DrvTypeCTA.desc"),
    bgColor: t("DrvTypeCTA.bgColor"),
    textColor: t("DrvTypeCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DrvTypeCTA.btnMode"),
    btnLink: t("DrvTypeCTA.btnLink"),
    btnText: t("DrvTypeCTA.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvTypeCTA;
