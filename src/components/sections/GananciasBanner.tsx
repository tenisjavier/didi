import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner, { BannerProps } from "../Banner";

interface GananciasBannerProps {
  image?: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }
}

const GananciasBanner = ({ image }: GananciasBannerProps ) => {
  const { t } = useTranslation();
  const props: BannerProps = {
    title: t("GananciasBanner.title"),
    desc: t("GananciasBanner.desc"),
    bgColor: t("GananciasBanner.bgColor"),
    textColor: t("GananciasBanner.textColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData!}
          alt={image.description}
          className="z-10 mt-10"
        ></GatsbyImage>
      ),
      flexWrap: "flex-wrap",
      reverse: true,
    }),
  };

  return <Banner {...props}></Banner>;
};

export default GananciasBanner;
