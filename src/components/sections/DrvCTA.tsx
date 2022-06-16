import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvCTAProps {
  image: any;
}

const DrvCTA = ({ image }: DrvCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DrvCTA.title"),
    desc: t("DrvCTA.desc"),
    bullets: t("DrvCTA.bullets", { returnObjects: true }),
    bgColor: t("DrvCTA.bgColor"),
    textColor: t("DrvCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DrvCTA.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
