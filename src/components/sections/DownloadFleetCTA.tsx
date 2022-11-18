import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DownloadCTAProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DownloadFleetCTA = ({ image }: DownloadCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DownloadFleetCTA.title"),
    desc: t("DownloadFleetCTA.desc"),
    textColor: t("DownloadFleetCTA.textColor"),
    bgColor: t("DownloadFleetCTA.bgColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-100"
        ></GatsbyImage>
      ),
    }),

    btnType: "fleet",
    btnMode: t("DownloadFleetCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DownloadFleetCTA;
