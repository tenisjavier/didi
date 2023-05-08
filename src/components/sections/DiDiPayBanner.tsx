import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface DiDiPayBannerProps {
  image?: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayBanner = ({ image }: DiDiPayBannerProps) => {
  const props: BannerProps = {
    title: t("DiDiPayBanner.title"),
    desc: t("DiDiPayBanner.desc"),
    bgColor: t("DiDiPayBanner.bgColor"),
    textColor: t("DiDiPayBanner.textColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData!}
          alt={image.description}
          className="z-10 my-10 w-56"
        ></GatsbyImage>
      ),
    }),
    justifyContent: "justify-around",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiPayBanner;
