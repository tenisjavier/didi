import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

interface GananciasBannerProps {
  image?: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const GananciasBanner = ({ image }: GananciasBannerProps) => {
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
      reverse: true,
    }),
  };

  return <Banner {...props}></Banner>;
};

export default GananciasBanner;
